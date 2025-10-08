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
                <Title>Deli Delights</Title>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.radioContainer}>
                    <Text style={styles.radioHeader}>Sandwich Size</Text>
                    <RadioGroup
                    radioButtons={props.sizeRadioButtons}
                    onPress={props.onSetSizeId}
                    selectedId={props.sizeId}
                    layout="row"
                    containerStyle={styles.radioGroup}
                    labelStyle={styles.radioGroupLabel}
                    />
                </View>

                <View style={styles.radioContainer}>
                    <Text style={styles.radioHeader}>Bread Type</Text>
                    <RadioGroup
                    radioButtons={props.breadRadioButtons}
                    onPress={props.onSetBreadId}
                    selectedId={props.breadId}
                    layout="row"
                    containerStyle={styles.radioGroup}
                    labelStyle={styles.radioGroupLabel}
                    />
                </View>

                <View style={styles.rowContainer}>
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Meat Type:</Text>
                        <View style={styles.checkBoxSubContainer}>
                            {
                                props.meats.map((item) => {
                                    return (
                                        <BouncyCheckbox
                                        key={item.id}
                                        text={item.name}
                                        onPress={props.onSetMeats.bind(this, item.id)}
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


                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Sauce Type:</Text>
                        <View style={styles.checkBoxSubContainer}>
                            {
                                props.sauces.map((item) => {
                                    return (
                                        <BouncyCheckbox
                                        key={item.id}
                                        text={item.name}
                                        onPress={props.onSetSauces.bind(this, item.id)}
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
                    <View style={styles.checkBoxContainer}>
                        <Text style={styles.checkBoxHeader}>Vegetable Type:</Text>
                        <View style={styles.checkBoxSubContainer}>
                            {
                                props.vegetables.map((item) => {
                                    return (
                                        <BouncyCheckbox
                                        key={item.id}
                                        text={item.name}
                                        onPress={props.onSetVegetables.bind(this, item.id)}
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
                    

                    <View style={styles.cheeseContainer}>
                        <Text style={styles.checkBoxHeader}>Cheese Type:</Text>
                        <RadioGroup
                        radioButtons={props.cheeseRadioButtons}
                        onPress={props.onSetCheeseId}
                        selectedId={props.cheeseId}
                        layout="column"
                        containerStyle={styles.radioGroup}
                        labelStyle={styles.radioGroupLabel}
                        />
                    </View>
                </View>


                <View style={styles.rowContainer}>
                    <View style={styles.addOnsContainer}>
                        <View style={styles.addOnsSubContainer}>
                            <Text style={styles.addOnsLabel}>Double Meat</Text>
                            <Switch
                            onValueChange={props.onSetDoubleMeat}
                            value={props.doubleMeat}
                            thumbColor={
                                props.doubleMeat ? Colors.primary500 : Colors.primary800
                            }
                            trackColor={{False: "#767577", true: "#81b0ff"}}
                             />
                        </View>
                        <View style={styles.addOnsSubContainer}>
                            <Text style={styles.addOnsLabel}>Double Cheese</Text>
                            <Switch
                            onValueChange={props.onSetDoubleCheese}
                            value={props.doubleCheese}
                            thumbColor={
                                props.doubleCheese ? Colors.primary500 : Colors.primary800
                            }
                            trackColor={{False: "#767577", true: "#81b0ff"}}
                             />
                        </View>
                    </View>
                    <View style={styles.addOnsContainer}>
                        <View style={styles.addOnsSubContainer}>
                            <Text style={styles.addOnsLabel}>Toasted</Text>
                            <Switch
                            onValueChange={props.onSetToasted}
                            value={props.toasted}
                            thumbColor={
                                props.toasted ? Colors.primary500 : Colors.primary800
                            }
                            trackColor={{False: "#767577", true: "#81b0ff"}}
                             />
                        </View>
                        <View style={styles.addOnsSubContainer}>
                            <Text style={styles.addOnsLabel}>Meal Combo</Text>
                            <Switch
                            onValueChange={props.onSetMealCombo}
                            value={props.mealCombo}
                            thumbColor={
                                props.mealCombo ? Colors.primary500 : Colors.primary800
                            }
                            trackColor={{False: "#767577", true: "#81b0ff"}}
                             />
                        </View>
                    </View>
                    
                </View>

                <View style={styles.buttonContainer}>
                    <NavButton onPress={props.onNext}>Submit Order</NavButton>
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