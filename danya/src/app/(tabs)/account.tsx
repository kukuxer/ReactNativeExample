import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "../../constants/style/ThemeContext";
import styles from "../../styles/account.styles";

export default function AccountScreen() {
    const { theme, colors, setTheme } = useTheme();

    const isDark = theme === "dark";

    return (
        <View
            style={[
                styles.container,
                { backgroundColor: colors.background },
            ]}
        >
            <Text style={[styles.title, { color: colors.text }]}>
                Account
            </Text>

            <Text
                style={[
                    styles.subtitle,
                    { color: colors.textSecondary },
                ]}
            >
                Personalise your app experience.
            </Text>

            <Text
                style={[
                    styles.sectionTitle,
                    { color: colors.text },
                ]}
            >
                Appearance
            </Text>

            <View
                style={[
                    styles.card,
                    {
                        backgroundColor: colors.surface,
                        borderColor: colors.border,
                    },
                ]}
            >
                <View style={styles.cardHeading}>
                    <Ionicons
                        name="color-palette-outline"
                        size={20}
                        color={colors.accent}
                    />

                    <Text
                        style={[
                            styles.cardHeadingText,
                            { color: colors.text },
                        ]}
                    >
                        App theme
                    </Text>
                </View>

                <View
                    style={[
                        styles.segmentedControl,
                        {
                            backgroundColor: colors.background,
                            borderColor: colors.border,
                        },
                    ]}
                >
                    <Pressable
                        accessibilityRole="radio"
                        accessibilityState={{ checked: !isDark }}
                        onPress={() => setTheme("light")}
                        style={[
                            styles.segment,
                            {
                                backgroundColor: !isDark
                                    ? colors.accent
                                    : "transparent",
                            },
                        ]}
                    >
                        <Ionicons
                            name="sunny-outline"
                            size={17}
                            color={isDark ? colors.textSecondary : "#FFFFFF"}
                        />

                        <Text
                            style={[
                                styles.segmentLabel,
                                {
                                    color: isDark
                                        ? colors.textSecondary
                                        : "#FFFFFF",
                                },
                            ]}
                        >
                            Light
                        </Text>
                    </Pressable>

                    <Pressable
                        accessibilityRole="radio"
                        accessibilityState={{ checked: isDark }}
                        onPress={() => setTheme("dark")}
                        style={[
                            styles.segment,
                            {
                                backgroundColor: isDark
                                    ? colors.accent
                                    : "transparent",
                            },
                        ]}
                    >
                        <Ionicons
                            name="moon-outline"
                            size={17}
                            color={isDark ? "#FFFFFF" : colors.textSecondary}
                        />

                        <Text
                            style={[
                                styles.segmentLabel,
                                {
                                    color: isDark
                                        ? "#FFFFFF"
                                        : colors.textSecondary,
                                },
                            ]}
                        >
                            Dark
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}