import React, {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

import lightColors, {
    darkColors,
} from "./colors";

type ThemeName = "light" | "dark";

type ThemeContextType = {
    theme: ThemeName;
    colors: typeof lightColors;
    setTheme: (theme: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

export function ThemeProvider({children,}: {
    children: ReactNode;
}) {
    const [theme, setTheme] = useState<ThemeName>("light");

    const colors = theme === "dark" ? darkColors : lightColors;

    return (
        <ThemeContext.Provider
            value={{ theme, colors, setTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );
    }

    return context;
}