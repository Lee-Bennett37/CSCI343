import { Text, View, StyleSheet, ScrollView, Switch } from "react-native";
import Colors from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LinearGradient } from "expo-linear-gradient";




export default function HomeScreen(props){

    const insets = useSafeAreaInsets();

    return (
        <LinearGradient
        colors={[Colors.primary800, Colors.accent500, Colors.primary800]}
        style={styles.container}
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
                <Title>Busy Bikes</Title>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.radioContainer}>
                    <Text style={styles.radioHeader}>Repair Time</Text>
                    <RadioGroup
                    radioButtons={props.repairTimeRadioButtons}
                    onPress={props.onSetRepairTimeId}
                    selectedId={props.repairTimeId}
                    layout="row"
                    containerStyle={styles.radioGroup}
                    labelStyle={styles.radioGroupLabel}
                    />
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Services Required: </Text>
                        <View style={styles.checkBoxSubContainer}>
                            {
                                props.services.map((item) => {
                                    return (
                                        <BouncyCheckbox
                                        key={item.id}
                                        text={item.name}
                                        onPress={props.onSetServices.bind(this, item.id)}
                                        textStyle={styles.checkBoxLabel}
                                        innerIconStyle={styles.checkBoxInnerStyle}
                                        iconStyle={styles.checkBoxIconStyle}
                                        fillColor={Colors.primary500}
                                        style={styles.checkBox}
                                        />
                                    )
                                })
                            }
                        </View>
                    </View>

                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.addOnsContainer}>
                        <View style={styles.addOnsSubContainer}>
                            <Text style={styles.addOnsLabel}>Newsletter Sign-up</Text>
                            <Switch
                            onValueChange={props.onSetNewsletter}
                            value={props.newsletter}
                            thumbColor={
                                props.newsletter ? Colors.primary500 : Colors.primary800
                            }
                            trackColor={{False: "#767577", true: "#81b0ff"}}
                             />
                        </View>
                        <View style={styles.addOnsSubContainer}>
                            <Text style={styles.addOnsLabel}>Rental Membership Sign-up</Text>
                            <Switch
                            onValueChange={props.onSetRentalMembership}
                            value={props.rentalMembership}
                            thumbColor={
                                props.rentalMembership ? Colors.primary500 : Colors.primary800
                            }
                            trackColor={{False: "#767577", true: "#81b0ff"}}
                             />
                        </View>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <NavButton onPress={props.onNext}>Set Appointment</NavButton>
                </View>
            </ScrollView>

        </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
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
    radioContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    radioHeader: {
        fontSize: 30,
        color: Colors.primary500,
        fontFamily: "Note"
    },
    radioGroup: {
        paddingBottom: 20,
    },
    radioGroupLabel: {
        fontSize: 15,
        color: Colors.primary500,
        fontFamily: "Note"
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: 20,
        width: "90%"
    },
    checkBoxContainer:{
        width: "50%"
    },
    checkBoxHeader: {
        fontSize: 20,
        color: Colors.primary500,
        fontFamily: "Note"
    },
    checkBoxSubContainer: {
        padding: 2,
    },
    checkBox: {
        padding: 2
    },
    checkBoxLabel: {
        textDecorationLine: "None",
        color: Colors.primary500,
        fontFamily: "Note"
    },
    checkBoxInnerStyle: {
        borderRadius: 0,
        borderColor: Colors.primary500
    },
    checkBoxIconStyle: {
        borderRadius: 0
    },
    cheeseContainer: {
        width: "50%",
        alignItems: "center"
    },
    addOnsContainer: {
        justifyContent:"space-between"
    },
    addOnsSubContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    addOnsLabel: {
        color: Colors.primary500,
        fontSize: 20,
        fontFamily: "Note"
    },
    buttonContainer: {
        alignItems: "center"
    }
})