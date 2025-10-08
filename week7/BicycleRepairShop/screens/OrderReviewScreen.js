import { View, Text, ScrollView, StyleSheet, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";





export default function OrderReviewScreen(props){
    const insets = useSafeAreaInsets();

    return(
        <ImageBackground
        source={require("../assets/images/bike.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
        >
        <View
        style={[
            styles.container,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            },
        ]}
        >
            <View style={styles.titleContainer}>
                <Title>Services Summary</Title>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>
                        Your appointment has been set with the details below
                    </Text>
                </View>

                <View style={styles.servicesContainer}>
                    <Text style={styles.services}>Repair Time:</Text>
                    <Text style={styles.subServices}>{props.repairTime}</Text>
                    {props.services.map((item) => {
                        if (item.value){
                            return (
                                <Text key={item.id}
                                style={styles.subServices}>{item.name}
                                </Text>
                            );
                        }
                    })}
                    
                </View>
                    
                    <Text style={styles.services}>Additional Options:</Text>
                    <Text style={styles.subServices}>
                        {props.newsletter ? "Toasted" : ""}
                    </Text>
                    <Text style={styles.subServices}>
                        {props.rentalMembership ? "Double Meat" : ""}
                    </Text>

                    <View style={styles.subTitleContainer}>
                        <Text
                            style={styles.subTitle}>SubTotal: ${props.price.toFixed(2)}
                        </Text>
                        <Text
                            style={styles.subTitle}>Sales Tax: ${(props.price*0.06).toFixed(2)}
                        </Text>
                        <Text
                            style={styles.subTitle}>Total: ${(props.price + props.price *0.06).toFixed(2)}
                        </Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <NavButton onPress={props.onNext}>Return Home</NavButton>
                    </View>         




            </ScrollView>





        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundImage: {
        opacity: 0.3,
    },
    titleContainer: {
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500
    },
    scrollContainer: {
        flex: 1
    },
    subTitleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    subTitle: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: Colors.primary500
    },
    servicesContainer: {
        flex: 3,
    },
    services: {
        fontSize: 20,
        color: Colors.primary500,
        fontFamily: "Note"
    },
    subServices: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
        color: Colors.primary500
    },
    buttonContainer: {
        alignItems: "center"
    }
})