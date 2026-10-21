import { View, Text, StyleSheet } from "react-native";

import { useTheme } from "../../constants/style/ThemeContext";

export default function NearbyScreen() {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.background,
        },
        title: {
            fontSize: 24,
            fontWeight: "700",
            color: colors.text,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nearby</Text>
        </View>
    );
}