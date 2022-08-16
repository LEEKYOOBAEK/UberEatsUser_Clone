import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import HomeScreen from './src/screen/HomeScreen'
import RestaurantDetailScreen from './src/screen/RestaurantDetailScreen';

// 각 레스토랑 데이터를 각각 가져오기 위한 컴포넌트
//import RestaurantItem from './src/component/RestaurantItem'; => HomeScreen으로 집어넣음.

//레스토랑의 데이터를 가져온다.
//import Restaurants from './assets/data/restaurants.json'; => HomeScreen으로 집어넣음.

export default function App() {
  return (
    <RestaurantDetailScreen />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  // image: {
  //   width: "100%",
  //   aspectRatio: 5/3,
  // },
  // row: {
  //   marginTop: 10,
  //   width: "100%",
  //   flexDirection: "row",
  //   alignItems: "center"

  // },
  // rating: {
  //   marginLeft: "auto",
  //   paddingHorizontal: 5,
  //   paddingVertical: 7,
  //   borderRadius: 20,
  //   backgroundColor: "lightgray",
  // },
  // name: {
  //   fontSize: 15,
  //   fontWeight:"600",

  // },
  // subTitle: {
  //   fontSize: 12,
  //   color: "gray",
  // },
});
