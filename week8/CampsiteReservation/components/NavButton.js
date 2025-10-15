import {Text, StyleSheet, View, Pressable, useWindowDimensions} from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
    const {width, height} = useWindowDimensions();
    return (
        <Pressable

        onPress={props.onPress}
        style={({pressed}) => pressed && StyleSheet.pressedItem}
        
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, {fontSize: width*0.07}]}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default NavButton;

const styles=StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 30,
        backgroundColor: Colors.primary500,
        width: 3000,
        maxWidth: "70%",
        margin: 8,
        
    },
    pressedItem: {
        opacity: 0.5,
    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Kingsman",
        color: Colors.accent500,
    },
})