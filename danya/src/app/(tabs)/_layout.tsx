
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.muted,
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: "600",
                    marginBottom: 4,
                },
                tabBarStyle: {
                    height: 62,
                    paddingTop: 7,
                    borderTopColor: colors.border,
                    backgroundColor: colors.surface,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="tickets"
                options={{
                    title: "Tickets",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ticket-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="nearby"
                options={{
                    title: "Nearby",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="map-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="account"
                options={{
                    title: "Account",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="person-circle-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
