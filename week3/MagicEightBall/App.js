import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, TextInput, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const maxVal = 20;
  const minVal = 1;
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  const [userQuestion, setUserQuestion] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [answer, setAnswer] = useState("");

  function startEightBallHandler(){
    setModalIsVisible(true)
    const rndNum = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    setAnswer(responses[rndNum-1]);


  }
  function endEightBallHandler(){
    setUserQuestion("");
    setModalIsVisible(false)
  }
  function onAsk() {
    
  }

  if (userQuestion !== ""){
    resultText = <Text  style={styles.resultText}>{answer}</Text>
  }

  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Magic Eight Ball</Text>
        </View>

        

        <View style = {styles.questionContainer}>
          <Text style = {styles.inputLabel}>Enter your Question</Text>
            <TextInput 
            style = {styles.textInput}
            placeholder="Ask the Magic Eight Ball"
            onChangeText={setUserQuestion}
            value={userQuestion}
            keyboardType="default"
            />
        </View>

        <View style={styles.askButtonContainer}>
          <Pressable
          android_ripple={{color: "#210644"}}
          onPress={startEightBallHandler}
          style = {({pressed}) => pressed && styles.pressedButton}
          >
            <View style={styles.askButton}>
              <Text style={styles.askButtonText}>Ask the Eight Ball</Text>
            </View>
          </Pressable>
        </View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style = {styles.modalRoot}>
            <Text style = {styles.inputLabel}>{userQuestion}</Text>
            <Text style = {styles.inputLabel}>{answer}</Text>
              
            <View style={styles.button}>
              <Button title="Done" color="black" onPress={endEightBallHandler} />
            </View>

          </SafeAreaView>
        </Modal>
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#8b1a79ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "black",
    width: "90%",
    justifyContent: "center",
    margine: 20,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: "white",
    marginTop: 50
  },
  title: {
    fontSize: 40,
    color: "white",
    textAlign: "center"
  },
  askButtonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  askButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10
  },
  askButtonText: {
    color: "black",
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold"
  },
  pressedButton: {
    opacity: 0.5
  },

  resultText: {
    fontSize: 25,
    color: "white",
    textAlign: "center"
  },
  modalRoot: {
    flex: 1,
    backgroundColor: '#923182ff',
    alignItems: "center",
  },
  inputLabel: {
    height: 30,
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#925b89ff',
    backgroundColor: '#eeb9e5ff',
    color: "black",
    borderRadius: 6,
    width: "90%",
    padding: 12,
    marginBottom: 30,
    alignItems: "center",
    textAlign: "center",

  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15
  },
  button: {
    width: "30%",
    marginHorizontal: 8
  },
  questionContainer: {
    marginTop: 50,
    width: "90%",
    height: 200,
    alignItems: "center",
  }
});
