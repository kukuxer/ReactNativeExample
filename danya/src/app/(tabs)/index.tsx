import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    Pressable,
    View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/constants/style/ThemeContext";
import { LOCATIONS } from "@/constants/transport";
import createHomeStyles from "../../styles/home.styles";

type LocationField = "origin" | "destination";

export default function HomeScreen() {
    const { colors } = useTheme();
    const styles = createHomeStyles(colors)
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [focusedField, setFocusedField] =
        useState<LocationField | null>(null);

    const insets = useSafeAreaInsets();

    function selectLocation(
        field: LocationField,
        location: string
    ) {
        if (field === "origin") {
            setOrigin(location);
        } else {
            setDestination(location);
        }

        setFocusedField(null);
    }

    // Added: swap the origin and destination.
    function swapLocations() {
        setOrigin(destination);
        setDestination(origin);
        setFocusedField(null);
    }

    function findJourney() {
        const selectedOrigin = LOCATIONS.find(
            (location) =>
                location.name.toLowerCase() ===
                origin.trim().toLowerCase()
        );

        const selectedDestination = LOCATIONS.find(
            (location) =>
                location.name.toLowerCase() ===
                destination.trim().toLowerCase()
        );

        if (!selectedOrigin || !selectedDestination) {
            setFocusedField(
                !selectedOrigin ? "origin" : "destination"
            );
            return;
        }

        if (selectedOrigin.name === selectedDestination.name) {
            setFocusedField("destination");
            return;
        }

        setFocusedField(null);

        router.push({
            pathname: "/journey-results",
            params: {
                origin: selectedOrigin.name,
                destination: selectedDestination.name,
            },
        });
    }

    function renderLocationField(
        field: LocationField,
        label: string,
        value: string,
        onChangeText: (text: string) => void,
        icon: "radio-button-on" | "location-outline"
    ) {
        const isFocused = focusedField === field;

        const suggestions =
            value.trim().length === 0
                ? []
                : LOCATIONS.filter((location) =>
                    location.name
                        .toLowerCase()
                        .includes(value.trim().toLowerCase())
                );

        return (
            <View style={styles.autocompleteContainer}>
                <View
                    style={[
                        styles.locationSelector,
                        isFocused && styles.locationSelectorFocused,
                    ]}
                >
                    <Ionicons
                        name={icon}
                        size={20}
                        color={colors.accent}
                    />

                    <View style={styles.locationDetails}>
                        <Text style={styles.fieldLabel}>{label}</Text>

                        <TextInput
                            value={value}
                            onChangeText={onChangeText}
                            onFocus={() => setFocusedField(field)}
                            placeholder={
                                field === "origin"
                                    ? "Starting point"
                                    : "Where to?"
                            }
                            placeholderTextColor={colors.muted}
                            autoCorrect={false}
                            autoCapitalize="words"
                            returnKeyType={
                                field === "origin" ? "next" : "search"
                            }
                            accessibilityLabel={label}
                            style={styles.locationInput}
                            onSubmitEditing={() => {
                                if (field === "origin") {
                                    setFocusedField("destination");
                                } else {
                                    findJourney();
                                }
                            }}
                        />
                    </View>

                    {value.length > 0 && (
                        <Pressable
                            onPress={() => onChangeText("")}
                            hitSlop={10}
                            accessibilityRole="button"
                            accessibilityLabel={`Clear ${label.toLowerCase()}`}
                        >
                            <Ionicons
                                name="close-circle"
                                size={18}
                                color={colors.muted}
                            />
                        </Pressable>
                    )}
                </View>

                {isFocused && value.trim().length > 0 && (
                    <View style={styles.suggestionsList}>
                        {suggestions.length > 0 ? (
                            suggestions.map((location) => (
                                <Pressable
                                    key={location.id}
                                    style={styles.suggestionRow}
                                    onPress={() =>
                                        selectLocation(field, location.name)
                                    }
                                >
                                    <Ionicons
                                        name="location-outline"
                                        size={19}
                                        color={colors.accent}
                                    />

                                    <View style={styles.suggestionText}>
                                        <Text style={styles.suggestionTitle}>
                                            {location.name}
                                        </Text>
                                        <Text style={styles.suggestionDescription}>
                                            {location.description}
                                        </Text>
                                    </View>

                                    <Ionicons
                                        name="arrow-up"
                                        size={17}
                                        color={colors.muted}
                                    />
                                </Pressable>
                            ))
                        ) : (
                            <Text style={styles.noSuggestions}>
                                No matching towns found
                            </Text>
                        )}
                    </View>
                )}
            </View>
        );
    }

    return (
        <ScrollView
            style={styles.screen}
            contentContainerStyle={[
                styles.content,
                { paddingTop: insets.top + 8 },
            ]}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            onTouchStart={() => {
                // Suggestions remain controlled by the focused field.
            }}
        >
            {/* HEADER */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.eyebrow}>
                        YOUR CITY, MADE EASIER
                    </Text>
                    <Text style={styles.title}>Where to?</Text>
                    <Text style={styles.subtitle}>
                        Plan your next journey.
                    </Text>
                </View>

                <Pressable
                    accessibilityRole="button"
                    accessibilityLabel="Open account"
                    style={styles.profileButton}
                    onPress={() => router.navigate("/account")}
                >
                    <Ionicons
                        name="person-outline"
                        size={22}
                        color={colors.primary}
                    />
                </Pressable>
            </View>

            {/* JOURNEY SEARCH */}
            <View style={styles.searchCard}>
                <Text style={styles.sectionLabel}>
                    PLAN YOUR JOURNEY
                </Text>


                {/* Added: swap button */}
                {renderLocationField(
                    "origin",
                    "From",
                    origin,
                    setOrigin,
                    "radio-button-on"
                )}

                <View style={styles.swapButtonContainer}>
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="Swap origin and destination"
                        onPress={swapLocations}
                        hitSlop={10}
                        style={({ pressed }) => [
                            styles.swapButton,
                            { opacity: pressed ? 0.6 : 1 },
                        ]}
                    >
                        <Ionicons
                            name="swap-vertical"
                            size={21}
                            color={colors.accent}
                        />
                    </Pressable>
                </View>

                <View style={styles.locationDivider} />

                {renderLocationField(
                    "destination",
                    "To",
                    destination,
                    setDestination,
                    "location-outline"
                )}

                <Pressable
                    accessibilityRole="button"
                    style={styles.primaryButton}
                    onPress={findJourney}
                >
                    <Text style={styles.primaryButtonText}>
                        Find routes
                    </Text>
                    <Ionicons
                        name="arrow-forward"
                        size={19}
                        color={colors.surface}
                    />
                </Pressable>
            </View>

            {/* QUICK ACCESS */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                    Your transport
                </Text>
            </View>

            <View style={styles.tilesRow}>
                <Pressable
                    accessibilityRole="button"
                    style={styles.tile}
                    onPress={() => router.navigate("/tickets")}
                >
                    <View style={styles.tileIcon}>
                        <Ionicons
                            name="ticket-outline"
                            size={24}
                            color={colors.accent}
                        />
                    </View>

                    <Text style={styles.tileTitle}>My tickets</Text>
                    <Text style={styles.tileDescription}>
                        Cards and passes
                    </Text>

                    <View style={styles.tileFooter}>
                        <Text style={styles.tileLink}>Open wallet</Text>
                        <Ionicons
                            name="arrow-forward"
                            size={15}
                            color={colors.primary}
                        />
                    </View>
                </Pressable>

                <Pressable
                    accessibilityRole="button"
                    style={styles.tile}
                    onPress={() => router.navigate("/nearby")}
                >
                    <View style={styles.tileIcon}>
                        <Ionicons
                            name="map-outline"
                            size={24}
                            color={colors.accent}
                        />
                    </View>

                    <Text style={styles.tileTitle}>Nearby</Text>
                    <Text style={styles.tileDescription}>
                        Stops and stations
                    </Text>

                    <View style={styles.tileFooter}>
                        <Text style={styles.tileLink}>Explore map</Text>
                        <Ionicons
                            name="arrow-forward"
                            size={15}
                            color={colors.primary}
                        />
                    </View>
                </Pressable>
            </View>

            {/* ACCOUNT */}
            <Pressable
                accessibilityRole="button"
                style={styles.accountCard}
                onPress={() => router.navigate("/account")}
            >
                <View style={styles.accountIcon}>
                    <Ionicons
                        name="person-circle-outline"
                        size={26}
                        color={colors.primary}
                    />
                </View>

                <View style={styles.accountText}>
                    <Text style={styles.accountTitle}>
                        Make it yours
                    </Text>
                    <Text style={styles.accountDescription}>
                        Manage your account and documents.
                    </Text>
                </View>

                <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={colors.primary}
                />
            </Pressable>

            <Text style={styles.disclaimer}>
                More transport features coming soon.
            </Text>
        </ScrollView>
    );
}