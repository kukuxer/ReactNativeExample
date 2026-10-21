
import { StyleSheet } from "react-native";

import spacing from "../constants/style/spacing";
import radii from "../constants/style/radii";
import typography from "../constants/style/typography";
import sizes from "../constants/style/sizes";

type ThemeColors = typeof import("../constants/style/colors").default;

const createJourneyResultsStyles = (colors: ThemeColors) =>
    StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: colors.background,
        },
        header: {
            minHeight: 58,
            paddingHorizontal: spacing.lg,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        backButton: {
            width: 42,
            height: 42,
            borderRadius: radii.round,
            backgroundColor: colors.surface,
            alignItems: "center",
            justifyContent: "center",
        },
        headerTitle: {
            flex: 1,
            textAlign: "center",
            color: colors.text,
            fontSize: typography.subtitle,
            fontWeight: "700",
        },
        headerSpacer: {
            width: 42,
        },
        content: {
            paddingHorizontal: spacing.lg,
            paddingTop: spacing.md,
            gap: spacing.lg,
        },
        routeCard: {
            backgroundColor: colors.surface,
            borderRadius: radii.xl,
            padding: spacing.xl,
        },
        eyebrow: {
            color: colors.textSecondary,
            fontSize: typography.eyebrow,
            fontWeight: "800",
            letterSpacing: 1.2,
            marginBottom: spacing.lg,
        },
        routeRow: {
            flexDirection: "row",
        },
        routeMarkers: {
            width: 24,
            alignItems: "center",
            paddingTop: 5,
            paddingBottom: 7,
        },
        originMarker: {
            width: 12,
            height: 12,
            borderRadius: radii.round,
            borderWidth: 3,
            borderColor: colors.accent,
            backgroundColor: colors.surface,
        },
        routeLine: {
            width: 2,
            height: 35,
            backgroundColor: colors.border,
        },
        destinationMarker: {
            width: 12,
            height: 12,
            borderRadius: 3,
            backgroundColor: colors.accent,
        },
        routeLocations: {
            flex: 1,
            gap: spacing.md,
            marginLeft: spacing.sm,
        },
        locationBlock: {
            minHeight: 43,
        },
        locationLabel: {
            color: colors.textSecondary,
            fontSize: typography.eyebrow,
            fontWeight: "700",
            marginBottom: 3,
        },
        locationName: {
            color: colors.text,
            fontSize: typography.sectionTitle,
            fontWeight: "700",
        },
        summaryDivider: {
            height: 1,
            backgroundColor: colors.border,
            marginTop: spacing.lg,
            marginBottom: spacing.md,
        },
        summaryRow: {
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.xl,
        },
        summaryNumber: {
            color: colors.text,
            fontSize: typography.sectionTitle,
            fontWeight: "800",
        },
        summaryLabel: {
            color: colors.textSecondary,
            fontSize: typography.caption,
            marginTop: 2,
        },
        summaryVerticalDivider: {
            width: 1,
            height: 35,
            backgroundColor: colors.border,
        },
        sectionHeader: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        sectionHeadingContainer: {
            flex: 1,
        },
        sectionTitle: {
            color: colors.text,
            fontSize: typography.sectionTitle,
            fontWeight: "800",
        },
        sectionSubtitle: {
            color: colors.textSecondary,
            fontSize: typography.small,
            marginTop: 4,
        },
        countBadge: {
            minWidth: 34,
            height: 34,
            paddingHorizontal: spacing.sm,
            borderRadius: radii.md,
            backgroundColor: colors.primaryLight,
            alignItems: "center",
            justifyContent: "center",
        },
        countBadgeText: {
            color: colors.accent,
            fontSize: typography.body,
            fontWeight: "800",
        },
        serviceCard: {
            backgroundColor: colors.surface,
            borderRadius: radii.xl,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: colors.border,
        },
        serviceCardExpanded: {
            borderColor: colors.accent,
        },
        servicePressable: {
            padding: spacing.lg,
        },
        serviceHeader: {
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.md,
        },
        busIconContainer: {
            width: 48,
            height: 48,
            borderRadius: radii.md,
            backgroundColor: colors.primaryLight,
            alignItems: "center",
            justifyContent: "center",
        },
        serviceInfo: {
            flex: 1,
        },
        vehicleName: {
            color: colors.text,
            fontSize: typography.subtitle,
            fontWeight: "800",
        },
        vehicleDescription: {
            color: colors.textSecondary,
            fontSize: typography.small,
            marginTop: 4,
            lineHeight: 17,
        },
        routeNumberBadge: {
            paddingHorizontal: spacing.md,
            paddingVertical: spacing.sm,
            borderRadius: radii.md,
            backgroundColor: colors.primaryLight,
        },
        routeNumberText: {
            color: colors.accent,
            fontSize: typography.body,
            fontWeight: "800",
        },
        serviceFooter: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: spacing.sm,
            marginTop: spacing.lg,
            paddingTop: spacing.md,
            borderTopWidth: 1,
            borderTopColor: colors.border,
        },
        departureCount: {
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.xs,
            flexShrink: 1,
        },
        departureCountText: {
            color: colors.textSecondary,
            fontSize: typography.small,
        },
        expandLabelContainer: {
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.xs,
        },
        expandLabel: {
            color: colors.accent,
            fontSize: typography.small,
            fontWeight: "800",
        },
        expandedContent: {
            paddingHorizontal: spacing.lg,
            paddingBottom: spacing.lg,
            gap: spacing.md,
        },
        expandedDivider: {
            height: 1,
            backgroundColor: colors.border,
            marginBottom: spacing.xs,
        },
        detailsHeading: {
            color: colors.text,
            fontSize: typography.subtitle,
            fontWeight: "800",
        },
        occupancyHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        occupancyLabel: {
            color: colors.textSecondary,
            fontSize: typography.body,
        },
        occupancyValue: {
            color: colors.text,
            fontSize: typography.body,
            fontWeight: "800",
        },
        progressTrack: {
            height: 8,
            backgroundColor: colors.border,
            borderRadius: radii.round,
            overflow: "hidden",
        },
        progressFill: {
            height: "100%",
            backgroundColor: colors.accent,
            borderRadius: radii.round,
        },
        seatInfoRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: spacing.sm,
        },
        seatInfo: {
            color: colors.textSecondary,
            fontSize: typography.small,
        },
        demoLabel: {
            color: colors.muted,
            fontSize: typography.caption,
        },
        locationButton: {
            minHeight: 44,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: radii.md,
            paddingHorizontal: spacing.md,
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.sm,
        },
        locationButtonLabel: {
            flex: 1,
            color: colors.text,
            fontSize: typography.small,
            fontWeight: "700",
        },
        locationComingSoon: {
            color: colors.textSecondary,
            fontSize: typography.caption,
        },
        timetableHeader: {
            marginTop: spacing.md,
            gap: spacing.xs,
        },
        timetableRoute: {
            color: colors.textSecondary,
            fontSize: typography.small,
        },
        emptyTimetable: {
            padding: spacing.xl,
            borderRadius: radii.lg,
            backgroundColor: colors.background,
            alignItems: "center",
            gap: spacing.sm,
        },
        emptyTimetableTitle: {
            color: colors.text,
            fontSize: typography.body,
            fontWeight: "800",
            textAlign: "center",
        },
        emptyTimetableDescription: {
            color: colors.textSecondary,
            fontSize: typography.small,
            lineHeight: 19,
            textAlign: "center",
        },
        departureCard: {
            backgroundColor: colors.background,
            borderRadius: radii.lg,
            padding: spacing.md,
            gap: spacing.md,
        },
        departureTopRow: {
            flexDirection: "row",
            alignItems: "center",
        },
        timeColumn: {
            flex: 1,
            minWidth: 0,
        },
        arrivalColumn: {
            alignItems: "flex-end",
        },
        timeLabel: {
            color: colors.textSecondary,
            fontSize: typography.eyebrow,
            fontWeight: "700",
            marginBottom: spacing.xs,
        },
        departureTime: {
            color: colors.text,
            fontSize: 23,
            fontWeight: "800",
        },
        stationName: {
            color: colors.textSecondary,
            fontSize: typography.caption,
            marginTop: 3,
        },
        tripDuration: {
            flex: 0.9,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            paddingHorizontal: spacing.xs,
        },
        durationLine: {
            flex: 1,
            height: 1,
            backgroundColor: colors.border,
        },
        durationInfo: {
            alignItems: "center",
            gap: 3,
        },
        durationText: {
            color: colors.textSecondary,
            fontSize: 10,
            fontWeight: "600",
        },
        departureDivider: {
            height: 1,
            backgroundColor: colors.border,
        },
        buyButton: {
            minHeight: 44,
            paddingHorizontal: spacing.lg,
            borderRadius: radii.md,
            backgroundColor: colors.accent,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: spacing.sm,
        },
        buyButtonText: {
            color: colors.surface,
            fontSize: typography.button,
            fontWeight: "800",
        },
        noticeCard: {
            flexDirection: "row",
            alignItems: "center",
            gap: spacing.sm,
            paddingHorizontal: spacing.xs,
            paddingTop: spacing.sm,
        },
        footer: {
            flex: 1,
            color: colors.textSecondary,
            fontSize: typography.caption,
            lineHeight: 17,
        },
    });

export default createJourneyResultsStyles;
