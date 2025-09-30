import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {useFonts} from "expo-font";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen.js";
import Colors from "./constants/colors.js";
import RecipeScreen from "./screens/RecipeScreen.js";


export default function App(props){
    const [fontsLoaded] = useFonts({
        noteFont: require("./assets/fonts/Note.ttf"),
        paperNote: require("./assets/fonts/Papernotes.ttf"),
        paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
        paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
    });

    const [currentScreen, setCurrentScreen] = useState("");
    const [currentID, setCurrentID] = useState(4);
    const [currentRecipes, setCurrentRecipes] = useState([
        {
            id: 1,
            title: "PB & J",
            text: "1. Get two pieces of bread \n2. Spread peanut butter on one slice \n3. Spread jelly on the other slice \n4. Put the pieces together and eat" 
        },
        {
            id: 2,
            title: "Ramen",
            text: "1. Boil water \n2. Dump noodles into the water \n3. Wait for noodles to soften \n4. Strain the Noodles and eat"
        }
    ]);

    function HomeScreenHandler() {
        setCurrentScreen("");
    }

    function RecipeScreenHandler() {
        setCurrentScreen("recipes");
    }

    function AddRecipeScreenHandler(){
        setCurrentScreen("add");
    }

    function addRecipeHandler(enteredRecipeTitle, enteredRecipeText){
        setCurrentRecipes((currentRecipes) => [
            ...currentRecipes,
            {id: currentID, title: enteredRecipeTitle, text: enteredRecipeText},

        ]);
        setCurrentID(currentID +1);
        RecipeScreenHandler();
    }

    function deleteRecipeHandler(id){
        setCurrentRecipes((currentRecipes) => {
            return currentRecipes.filter((item) => item.id !== id);
        })
    }

    let screen = <HomeScreen onNext={RecipeScreenHandler} />

    if (currentScreen === "recipes"){
        screen = <RecipeScreen
        onHome={HomeScreenHandler}
        onAdd={AddRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
        />
    }

    if (currentScreen === "add"){
        screen = 
            <AddRecipeScreen onCancel={RecipeScreenHandler} onAdd={addRecipeHandler}/>
    }

    return (
        <>
        <StatusBar style="auto"/>
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary800,
        alignItems: "center",
        justifyContent: "center",
    },
});