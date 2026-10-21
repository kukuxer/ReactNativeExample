import { StyleSheet } from "react-native";

import spacing from "../constants/style/spacing";
import radii from "../constants/style/radii";
import typography from "../constants/style/typography";
import sizes from "../constants/style/sizes";
import type lightColors from "../constants/style/colors";

type ThemeColors = typeof lightColors;

const createHomeStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: colors.background,
        },

        content: {
            paddingHorizontal: spacing.xxl - 2,
            paddingTop: spacing.xxxl - 4,
            paddingBottom: spacing.xxl,
        },

        header: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: spacing.xl,
        },

        eyebrow: {
            color: colors.accent,
            fontSize: typography.eyebrow,
            fontWeight: "800",
            letterSpacing: 1.5,
        },

        title: {
            color: colors.text,
            fontSize: typography.title,
            fontWeight: "800",
            marginTop: spacing.sm,
        },

        subtitle: {
            color: colors.muted,
            fontSize: typography.body,
            marginTop: spacing.xs,
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

        searchCard: {
            backgroundColor: colors.surface,
            padding: spacing.lg,
            borderRadius: radii.xl,
            borderWidth: 1,
            borderColor: colors.border,
            marginBottom: spacing.xxl,
        },

        sectionLabel: {
            color: colors.accent,
            fontSize: typography.caption,
            fontWeight: "800",
            letterSpacing: 1.1,
            marginBottom: spacing.sm,
        },

        autocompleteContainer: {
            position: "relative",
            zIndex: 2,
        },

        locationSelector: {
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.md,
            paddingHorizontal: spacing.sm,
            paddingVertical: spacing.md,
            minHeight: 66,
            borderRadius: radii.md,
            position: "relative",
            zIndex: 1,
        },

        locationSelectorFocused: {
            backgroundColor: colors.background,
            zIndex: 1,
        },

        locationDetails: {
            flex: 1,
            minWidth: 0,
        },

        fieldLabel: {
            color: colors.textSecondary,
            fontSize: typography.eyebrow,
            fontWeight: "700",
            letterSpacing: 1,
            marginBottom: spacing.xs,
        },

        locationInput: {
            flex: 1,
            color: colors.text,
            fontSize: typography.subtitle,
            fontWeight: "600",
            padding: 0,
            minHeight: 26,
        },

        locationDivider: {
            height: 1,
            backgroundColor: colors.border,
            marginLeft: 42,
        },

        suggestionsList: {
            backgroundColor: colors.surface,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: radii.md,
            marginTop: spacing.xs,
            marginBottom: spacing.sm,
            overflow: "hidden",
        },

        suggestionRow: {
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.md,
            paddingHorizontal: spacing.md,
            paddingVertical: spacing.md,
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
        },

        suggestionText: {
            flex: 1,
        },

        suggestionTitle: {
            color: colors.text,
            fontSize: typography.body,
            fontWeight: "700",
        },

        suggestionDescription: {
            color: colors.textSecondary,
            fontSize: typography.small,
            marginTop: spacing.xs,
        },

        noSuggestions: {
            color: colors.textSecondary,
            fontSize: typography.small,
            padding: spacing.md,
        },

        primaryButton: {
            backgroundColor: colors.primary,
            paddingVertical: spacing.md + 3,
            paddingHorizontal: spacing.lg,
            borderRadius: radii.md,
            marginTop: spacing.lg,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: spacing.sm,
            minHeight: 50,
        },

        primaryButtonText: {
            color: colors.surface,
            fontSize: typography.button,
            fontWeight: "700",
        },

        sectionHeader: {
            marginBottom: spacing.md,
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
            borderRadius: radii.lg,
            padding: spacing.md,
            borderWidth: 1,
            borderColor: colors.border,
        },

        tileIcon: {
            width: sizes.iconMedium,
            height: sizes.iconMedium,
            borderRadius: radii.md,
            backgroundColor: colors.primaryLight,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: spacing.md,
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
            marginTop: spacing.xs,
        },

        tileFooter: {
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.xs,
            marginTop: spacing.lg,
        },

        tileLink: {
            color: colors.accent,
            fontSize: typography.caption,
            fontWeight: "700",
        },

        accountCard: {
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.md,
            backgroundColor: colors.surface,
            borderRadius: radii.lg,
            borderWidth: 1,
            borderColor: colors.border,
            padding: spacing.md,
            marginTop: spacing.lg,
        },

        accountIcon: {
            width: sizes.iconSmall,
            height: sizes.iconSmall,
            borderRadius: radii.md,
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

        locationFieldsContainer: {
            position: "relative",
        },

        swapButtonContainer: {
            alignItems: "flex-end",
            height: 0,
            paddingRight: 12,
            zIndex: 10,
            elevation: 10,
        },

        swapButton: {
            width: 38,
            height: 38,
            marginTop: -19,
            borderRadius: 19,
            backgroundColor: colors.surface,
            borderWidth: 1,
            borderColor: colors.border,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            elevation: 10,
        },

        disclaimer: {
            color: colors.muted,
            fontSize: typography.caption,
            lineHeight: typography.caption + 6,
            textAlign: "center",
            marginTop: spacing.xl,
        },
    });

export default createHomeStyles;