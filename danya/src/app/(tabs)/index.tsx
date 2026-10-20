
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
import styles from "../../styles/home.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";



export default function HomeScreen() {
    // 2. Store what the user types into the journey form
    const [origin, setOrigin] = useState("My current location");
    const [destination, setDestination] = useState("");
    const insets = useSafeAreaInsets();

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
            contentContainerStyle={[
                styles.content,
                { paddingTop: insets.top + 5},
            ]}
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


