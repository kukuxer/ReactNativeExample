
import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    Pressable,
    View,
    StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import colors from "../../constants/colors";



export default function HomeScreen() {
    // 2. Store what the user types into the journey form
    const [origin, setOrigin] = useState("My current location");
    const [destination, setDestination] = useState("");

    // 3. Open the journey results screen
    function findJourney() {
        if (!destination.trim()) {
            return;
        }

        router.push({
            pathname: "/journey-results",
            params: {
                origin,
                destination: destination.trim(),
            },
        });
    }

    return (
        <ScrollView
            style={styles.screen}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
        >
            {/* HEADER */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.eyebrow}>YOUR CITY, MADE EASIER</Text>
                    <Text style={styles.title}>Where to?</Text>
                    <Text style={styles.subtitle}>
                        Your journeys. Your tickets. One app.
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
                        size={23}
                        color={colors.primary}
                    />
                </Pressable>
            </View>

            {/* JOURNEY SEARCH */}
            <View style={styles.searchCard}>
                <Text style={styles.sectionLabel}>PLAN YOUR JOURNEY</Text>

                <View style={styles.inputRow}>
                    <Ionicons
                        name="radio-button-on"
                        size={19}
                        color={colors.primary}
                    />

                    <TextInput
                        style={styles.input}
                        value={origin}
                        onChangeText={setOrigin}
                        placeholder="Starting point"
                        placeholderTextColor={colors.muted}
                        accessibilityLabel="Journey starting point"
                        returnKeyType="next"
                    />

                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="Use current location"
                        onPress={() => setOrigin("My current location")}
                    >
                        <Ionicons
                            name="locate-outline"
                            size={22}
                            color={colors.primary}
                        />
                    </Pressable>
                </View>

                <View style={styles.separatorRow}>
                    <View style={styles.separator} />
                </View>

                <View style={styles.inputRow}>
                    <Ionicons
                        name="location-outline"
                        size={21}
                        color={colors.primary}
                    />

                    <TextInput
                        style={styles.input}
                        value={destination}
                        onChangeText={setDestination}
                        placeholder="Where do you want to go?"
                        placeholderTextColor={colors.muted}
                        accessibilityLabel="Journey destination"
                        returnKeyType="search"
                        onSubmitEditing={findJourney}
                    />
                </View>

                <Pressable
                    accessibilityRole="button"
                    style={styles.primaryButton}
                    onPress={findJourney}
                >
                    <Text style={styles.primaryButtonText}>
                        Find my journey
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
                <Text style={styles.sectionTitle}>Your transport</Text>
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
                            size={25}
                            color={colors.primary}
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
                            size={25}
                            color={colors.primary}
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

            {/* ACCOUNT PROMPT */}
            <Pressable
                style={styles.accountCard}
                onPress={() => router.navigate("/account")}
            >
                <View style={styles.accountIcon}>
                    <Ionicons
                        name="person-circle-outline"
                        size={27}
                        color={colors.primary}
                    />
                </View>

                <View style={styles.accountText}>
                    <Text style={styles.accountTitle}>
                        Make it yours
                    </Text>
                    <Text style={styles.accountDescription}>
                        Save your favourite stops and manage your documents.
                    </Text>
                </View>

                <Ionicons
                    name="chevron-forward"
                    size={21}
                    color={colors.primary}
                />
            </Pressable>

            <Text style={styles.disclaimer}>
                Transport information and ticket features will be
                connected in future versions.
            </Text>
        </ScrollView>
    );
}

// 4. All visual styling lives here
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.background,
    },

    content: {
        paddingHorizontal: 22,
        paddingTop: 28,
        paddingBottom: 35,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
    },

    eyebrow: {
        color: colors.primary,
        fontSize: 10,
        fontWeight: "800",
        letterSpacing: 1.8,
    },

    title: {
        color: colors.text,
        fontSize: 36,
        fontWeight: "800",
        marginTop: 9,
    },

    subtitle: {
        color: colors.muted,
        fontSize: 14,
        marginTop: 5,
    },

    profileButton: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: colors.surface,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: "center",
        justifyContent: "center",
    },

    searchCard: {
        backgroundColor: colors.surface,
        padding: 18,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.border,
        marginBottom: 30,
    },

    sectionLabel: {
        color: colors.primary,
        fontSize: 11,
        fontWeight: "800",
        letterSpacing: 1.1,
        marginBottom: 15,
    },

    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        minHeight: 45,
    },

    input: {
        flex: 1,
        minWidth: 0,
        paddingVertical: 11,
        color: colors.text,
        fontSize: 14,
    },

    separatorRow: {
        paddingLeft: 7,
        paddingVertical: 3,
    },

    separator: {
        height: 1,
        backgroundColor: colors.border,
    },

    primaryButton: {
        backgroundColor: colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginTop: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 9,
    },

    primaryButtonText: {
        color: colors.surface,
        fontSize: 15,
        fontWeight: "700",
    },

    sectionHeader: {
        marginBottom: 15,
    },

    sectionTitle: {
        color: colors.text,
        fontSize: 21,
        fontWeight: "800",
    },

    tilesRow: {
        flexDirection: "row",
        gap: 12,
    },

    tile: {
        flex: 1,
        minWidth: 0,
        backgroundColor: colors.surface,
        borderRadius: 17,
        padding: 14,
        borderWidth: 1,
        borderColor: colors.border,
    },

    tileIcon: {
        width: 47,
        height: 47,
        borderRadius: 14,
        backgroundColor: colors.primaryLight,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
    },

    tileTitle: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "800",
    },

    tileDescription: {
        color: colors.muted,
        fontSize: 12,
        lineHeight: 18,
        marginTop: 5,
    },

    tileFooter: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginTop: 16,
    },

    tileLink: {
        color: colors.primary,
        fontSize: 11,
        fontWeight: "700",
    },

    accountCard: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        backgroundColor: colors.surface,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: colors.border,
        padding: 15,
        marginTop: 16,
    },

    accountIcon: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: colors.primaryLight,
        alignItems: "center",
        justifyContent: "center",
    },

    accountText: {
        flex: 1,
    },

    accountTitle: {
        color: colors.text,
        fontSize: 15,
        fontWeight: "800",
    },

    accountDescription: {
        color: colors.muted,
        fontSize: 12,
        lineHeight: 18,
        marginTop: 4,
    },

    disclaimer: {
        color: colors.muted,
        fontSize: 11,
        lineHeight: 17,
        textAlign: "center",
        marginTop: 22,
    },
});
