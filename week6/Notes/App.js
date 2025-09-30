import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {useFonts} from "expo-font";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import AddNotesScreen from "./screens/AddNotesScreen.js";
import NotesScreen from "./screens/NotesScreen.js";
import Colors from "./constants/colors.js";


export default function App(props){
    const [fontsLoaded] = useFonts({
        noteFont: require("./assets/fonts/Note.ttf"),
        paperNote: require("./assets/fonts/Papernotes.ttf"),
        paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
        paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
    });

    const [currentScreen, setCurrentScreen] = useState("");
    const [currentID, setCurrentID] = useState(4);
    const [currentNotes, setCurrentNotes] = useState([
        {
            id: 1,
            title: "Math Notes",
            text: "a^2 + b^2 = c^2"
        },
        {
            id: 2,
            title: "Birthdays",
            text: "Dakota: 08/17/1994\nJohn: 09/20/1996"
        }
    ]);

    function HomeScreenHandler() {
        setCurrentScreen("");
    }

    function NotesScreenHandler() {
        setCurrentScreen("notes");
    }

    function AddNotesScreenHandler(){
        setCurrentScreen("add");
    }

    function addNoteHandler(enteredNoteTitle, enteredNoteText){
        setCurrentNotes((currentNotes) => [
            ...currentNotes,
            {id: currentID, title: enteredNoteTitle, text: enteredNoteText},

        ]);
        setCurrentID(currentID +1);
        NotesScreenHandler();
    }

    function deleteNoteHandler(id){
        setCurrentNotes((currentNotes) => {
            return currentNotes.filter((item) => item.id !== id);
        })
    }

    let screen = <HomeScreen onNext={NotesScreenHandler} />

    if (currentScreen === "notes"){
        screen = <NotesScreen
        onHome={HomeScreenHandler}
        onAdd={AddNotesScreenHandler}
        onDelete={deleteNoteHandler}
        currentNotes={currentNotes}
        />
    }

    if (currentScreen === "add"){
        screen = 
            <AddNotesScreen onCancel={NotesScreenHandler} onAdd={addNoteHandler}/>
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