import {Text, StyleSheet, View, Pressable} from "react-native";
import Colors from "../constants/colors";

export default function NavButton(props) {
    return (
        <Pressable
        
        android_ripple={{color: Colors.accent800}}
        onPress={props.onPress}
        style={({pressed}) => pressed && StyleSheet.pressedItem}
        
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles=StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 300,
        margin: 8,
        borderRadius: 30,
        backgroundColor: Colors.primary500
    },
    pressedItem: {
        opacity: 0.8,
    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        fontFamily: "paperNoteBold",
        color: Colors.accent500,
    },
})