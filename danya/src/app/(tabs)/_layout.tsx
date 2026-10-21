import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../../constants/style/colors";

export default function TabLayout() {
    const insets = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,


                tabBarActiveTintColor: colors.surface,
                tabBarInactiveTintColor: colors.muted,

                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "700",
                    marginTop: 5,
                    marginBottom: 2,
                },

                tabBarItemStyle: {
                    minHeight: 64,
                    paddingTop: 7,
                },

                tabBarStyle: {
                    height: 70 + insets.bottom,
                    paddingTop: 5,
                    paddingBottom: Math.max(insets.bottom, 8),

                    backgroundColor: colors.primary,
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,

                    elevation: 12,
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: -4,
                    },
                    shadowOpacity: 0.08,
                    shadowRadius: 10,
                },

                tabBarActiveBackgroundColor: "transparent",
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="tickets"
                options={{
                    title: "Tickets",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "ticket" : "ticket-outline"}
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="nearby"
                options={{
                    title: "Nearby",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? "map" : "map-outline"}
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="account"
                options={{
                    title: "Account",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={
                                focused
                                    ? "person-circle"
                                    : "person-circle-outline"
                            }
                            size={27}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}