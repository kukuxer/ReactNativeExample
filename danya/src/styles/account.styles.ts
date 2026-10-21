import { StyleSheet } from "react-native";

import colors from "../constants/style/colors";
import spacing from "../constants/style/spacing";
import radii from "../constants/style/radii";
import typography from "../constants/style/typography";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing.xl,
        paddingTop: spacing.xxxl * 2,
    },

    title: {
        fontSize: typography.title,
        fontWeight: "800",
        color: colors.text,
        marginBottom: spacing.xs,
    },

    subtitle: {
        fontSize: typography.body,
        color: colors.textSecondary,
        marginBottom: spacing.xxl,
    },

    sectionTitle: {
        fontSize: typography.subtitle,
        fontWeight: "700",
        color: colors.text,
        marginBottom: spacing.md,
    },

    card: {
        backgroundColor: colors.surface,
        borderRadius: radii.lg,
        padding: spacing.lg,
        borderWidth: 1,
        borderColor: colors.border,
    },

    cardHeading: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: spacing.md,
    },

    cardHeadingText: {
        fontSize: typography.body,
        fontWeight: "700",
        color: colors.text,
        marginLeft: spacing.sm,
    },

    segmentedControl: {
        flexDirection: "row",
        backgroundColor: colors.background,
        borderRadius: radii.md,
        padding: spacing.xs,
        borderWidth: 1,
        borderColor: colors.border,
    },

    segment: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: spacing.sm,
        borderRadius: radii.sm,
    },

    segmentLabel: {
        marginLeft: spacing.sm,
        fontSize: typography.small,
        fontWeight: "600",
    },
});

export default styles;