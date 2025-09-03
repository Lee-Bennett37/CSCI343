import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image 
          style={styles.image}
          source={require("./Images/Section 2 Assignment Selfie.jpg")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Lee Bennett</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("mailto:tlbennet1@coastal.edu")} }
          >tlbennet1@coastal.edu</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("tel:5555039220")} }
          >555-503-9220</Text>
          <Text style={styles.text}
          onPress={ () => {Linking.openURL("https://github.com/Lee-Bennett37/CSCI343")} }
          >github.com/Lee-Bennett37/CSCI343</Text>
        </View>
      </SafeAreaView>
       
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333ff"
  },
  imageContainer: {
    flex: 1,
    marginTop: 90,
    width:"100%"
  },
  image: {
    height: 400,
    width: "100%",
    resizeMode: "cover",
    borderColor: "#020a1fff",
    borderWidth: 5
  },
  textContainer: {
    flex: 0.8,
    width: "100%",
    alignItems: "center"

  },
  name: {
    fontSize: 55,
    color: "white",
    fontWeight: "bold",
    marginBottom: 40
  },
  text: {
    fontSize: 25,
    color: "white",
    fontStyle: "italic",
    marginBottom: 20
  }
});
