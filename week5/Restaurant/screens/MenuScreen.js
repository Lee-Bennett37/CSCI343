import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '../components/Title.js';
import MenuItem from '../components/MenuItem.js';

export default function MenuScreen(props) {
    const insets = useSafeAreaInsets();

    const [menuItems, setMenuItems] = useState([
        {
            name: "Baby Back Ribs",
            image: require("../assets/images/BBRibs.png"),
            price: "$32.99",
            id: 1,
        },
        {
            name: "Cowboy Ribeye",
            image: require("../assets/images/Ribeye.png"),
            price: "$40.99",
            id: 2,
        },
        {
            name: "Famous Fajitas",
            image: require("../assets/images/Fajitas.png"),
            price: "$24.99",
            id: 3,
        },
        {
            name: "Original Legendary Burger",
            image: require("../assets/images/LegendaryBurger.png"),
            price: "$19.99",
            id: 4,
        },
        {
            name: "Surf & Turf Burger",
            image: require("../assets/images/SurfNTurf.png"),
            price: "$22.99",
            id: 5
        },
    ]);

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
            <Title>Menu</Title>
        </View>

        <View style={styles.listContainer}>
            <FlatList
                data={menuItems}
                keyExtractor={(item, index) =>{
                    return item.id;
                }}
                alwaysBounceVertical={false}
                showsVerticalScrollIndicator={false}
                renderItem={(itemData) => {
                    return (
                        <MenuItem 
                        name={itemData.item.name}
                        image={itemData.item.image}
                        price={itemData.item.price}
                        />
                    )
                }}
            />
        </View>


        <View style={styles.buttonContainer}>
            <Button title="Main Menu" onPress={props.onNext} color="#2f042fff" />
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
  listContainer: {
    flex: 7,
    width: 380
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150
  }
});
