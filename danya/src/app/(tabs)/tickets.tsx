
import { View, Text, StyleSheet } from "react-native";

export default function TicketsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Tickets</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F8F5",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#216B43",
    },
});
