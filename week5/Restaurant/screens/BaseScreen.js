import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title.js';
import Colors from '../constants/colors.js';

export default function BaseScreen(props) {
    const insets = useSafeAreaInsets();

  return (
    <View style={[
        styles.rootContainer,
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right
        }
    ]}
    >
        <View style={styles.titleContainer}>
            <Title>Hard Rock Cafe</Title>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../assets/images/HardRock.jpg")}/>
        </View>

        <View style={styles.infoContainer}>
            <Text 
            style={styles.infoText}
            onPress={() => Linking.openURL("tel:8439060007")}
            
            >843-906-0007</Text>
            <Text
            style={styles.infoText}
            onPress={() => Linking.openURL("https://maps.app.goo.gl/gpbeRMLT9ywz72H99")}>
                Broadway at the Beach,{"\n"} 1318 Celebrity Cir, Myrtle Beach, SC 29577
            </Text>
            <Text 
            style={styles.infoText}
            onPress={() => {Linking.openURL("https://cafe.hardrock.com/")}}>
                cafe.hardrock.com
            </Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button title="View Menu" onPress={props.onNext} color="#2f042fff" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "#111111",
    borderRadius: 30,
    justifyContent: "center"
  },
  imageContainer:{
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center"
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    fontFamily: "squealer",
    color: Colors.primary500
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150,
  }
});
