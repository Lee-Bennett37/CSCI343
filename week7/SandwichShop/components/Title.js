import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
        color: Colors.primary500,
        textShadowColor: Colors.accent800,
        textShadowRadius: 25,
        fontFamily: "noteFont",
        textAlign: "center",
    }
});