import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, ScrollView, FlatList } from 'react-native';
import Movie from './components/Movie';

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "Star Wars: Episode VI \n A New Hope",
      image: require("./assets/images/NewHope.jpg"),
      rating: "7.8",
    },
    {
      name: "Top Gun",
      image: require("./assets/images/TopGun.jpg"),
      rating: "9.2",
    },
    {
      name: "Top Gun: Maverick",
      image: require("./assets/images/Maverick.jpg"),
      rating: "8.6",
    },
    {
      name: "The Lord of the Rings: \n The Fellowship of the Ring",
      image: require("./assets/images/Fellowship.jpg"),
      rating: "9.3",
    },
    {
      name: "The Lord of the Rings: \n The Two Towers",
      image: require("./assets/images/TwoTowers.jpg"),
      rating: "9.8",
    },
    {
      name: "How to Train Your Dragon",
      image: require("./assets/images/Dragon.jpg"),
      rating: "8.3",
    },
    {
      name: "Inglourious Basterds",
      image: require("./assets/images/Inglourious.jpg"),
      rating: "9.5",
    },
    {
      name: "Midway",
      image: require("./assets/images/Midway.jpg"),
      rating: "8.9",
    },
    {
      name: "Pirates of the Carribean: \n The Curse of the Black Pearl",
      image: require("./assets/images/BlackPearl.png"),
      rating: "9.1",
    },
    {
      name: "Pirates of the Carribean: \n At World's End",
      image: require("./assets/images/WorldsEnd.jpg"),
      rating: "8.7",
    },
  ]);
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>

          <FlatList 
            data={movieItems}
            keyExtrator={(item, index) => item.name}
            renderItem={(itemData) => {
              return (
                <Movie 
                  name={itemData.item.name}
                  image={itemData.item.image}
                  rating={itemData.item.rating}
                />
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
 rootContainer: {
    flex: 1,
    backgroundColor: '#95fb82ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    backgroundColor: "white",
    borderWidth: 5,
    borderRadius: 10,
    marginTop: 50
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer:{
    flex:8,
    width: "90%"
  }
  
});
