import { StyleSheet } from "react-native";

import colors from "../constants/colors";
import spacing from "../constants/spacing";
import radii from "../constants/radii";
import typography from "../constants/typography";
import sizes from "../constants/sizes";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
    },

    content: {
        paddingHorizontal: spacing.xxl - 2,
        paddingTop: spacing.xxxl - 4,
        paddingBottom: spacing.xxxl,
    },

    // Header
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: spacing.xl + 5,
    },

    eyebrow: {
        color: colors.accent,
        fontSize: typography.eyebrow,
        fontWeight: "800",
        letterSpacing: 1.8,
    },

    title: {
        color: colors.text,
        fontSize: typography.title,
        fontWeight: "800",
        marginTop: spacing.sm + 1,
    },

    subtitle: {
        color: colors.muted,
        fontSize: typography.body,
        marginTop: spacing.xs + 1,
    },

    profileButton: {
        width: sizes.profileButton,
        height: sizes.profileButton,
        borderRadius: radii.round,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: "center",
        justifyContent: "center",
    },

    // Journey search card
    searchCard: {
        backgroundColor: colors.surface,
        padding: spacing.lg + 2,
        borderRadius: radii.xl,
        borderWidth: 1,
        borderColor: colors.border,
        marginBottom: spacing.xxxl - 2,
    },

    sectionLabel: {
        color: colors.accent,
        fontSize: typography.caption,
        fontWeight: "800",
        letterSpacing: 1.1,
        marginBottom: spacing.md + 3,
    },

    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.md,
        minHeight: sizes.inputRow,
    },

    input: {
        flex: 1,
        minWidth: 0,
        paddingVertical: spacing.sm + 3,
        color: colors.text,
        fontSize: typography.body,
    },

    separatorRow: {
        paddingLeft: spacing.sm - 1,
        paddingVertical: spacing.xs - 1,
    },

    separator: {
        height: sizes.separator,
        backgroundColor: colors.border,
    },

    // Primary action
    primaryButton: {
        backgroundColor: colors.primary,
        paddingVertical: spacing.md + 3,
        paddingHorizontal: spacing.lg,
        borderRadius: radii.md,
        marginTop: spacing.lg,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: spacing.sm + 1,
    },

    primaryButtonText: {
        color: colors.surface,
        fontSize: typography.button,
        fontWeight: "700",
    },

    // Quick access
    sectionHeader: {
        marginBottom: spacing.md + 3,
    },

    sectionTitle: {
        color: colors.text,
        fontSize: typography.sectionTitle,
        fontWeight: "800",
    },

    tilesRow: {
        flexDirection: "row",
        gap: spacing.md,
    },

    tile: {
        flex: 1,
        minWidth: 0,
        backgroundColor: colors.surface,
        borderRadius: radii.lg + 1,
        padding: spacing.md + 2,
        borderWidth: 1,
        borderColor: colors.border,
    },

    tileIcon: {
        width: sizes.iconMedium,
        height: sizes.iconMedium,
        borderRadius: radii.md + 2,
        backgroundColor: colors.primaryLight,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: spacing.md + 3,
    },

    tileTitle: {
        color: colors.text,
        fontSize: typography.subtitle,
        fontWeight: "800",
    },

    tileDescription: {
        color: colors.muted,
        fontSize: typography.small,
        lineHeight: typography.small + 6,
        marginTop: spacing.xs + 1,
    },

    tileFooter: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.xs + 1,
        marginTop: spacing.lg,
    },

    tileLink: {
        color: colors.accent,
        fontSize: typography.caption,
        fontWeight: "700",
    },

    // Account prompt
    accountCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.md,
        backgroundColor: colors.surface,
        borderRadius: radii.lg + 1,
        borderWidth: 1,
        borderColor: colors.border,
        padding: spacing.md + 3,
        marginTop: spacing.lg,
    },

    accountIcon: {
        width: sizes.iconSmall,
        height: sizes.iconSmall,
        borderRadius: radii.md + 2,
        backgroundColor: colors.primaryLight,
        alignItems: "center",
        justifyContent: "center",
    },

    accountText: {
        flex: 1,
    },

    accountTitle: {
        color: colors.text,
        fontSize: typography.button,
        fontWeight: "800",
    },

    accountDescription: {
        color: colors.muted,
        fontSize: typography.small,
        lineHeight: typography.small + 6,
        marginTop: spacing.xs,
    },

    // Footer
    disclaimer: {
        color: colors.muted,
        fontSize: typography.caption,
        lineHeight: typography.caption + 6,
        textAlign: "center",
        marginTop: spacing.xxl - 2,
    },
});

export default styles;