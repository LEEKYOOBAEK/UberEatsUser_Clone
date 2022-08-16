import { StyleSheet, Text, View, Image } from 'react-native';

const RestaurantItem = ({restaurant}) => {
  
  return ( 
    <View>
      <Image source={{uri: restaurant.image }} style={styles.image} />
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.subTitle}>{restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime} min</Text>
        </View>
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  image: {
    marginTop: 50,
    width: "100%",
    aspectRatio: 5/3,
  },
  row: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"

  },
  rating: {
    marginLeft: "auto",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: "lightgray",
  },
  name: {
    fontSize: 15,
    fontWeight:"600",

  },
  subTitle: {
    fontSize: 12,
    color: "gray",
  },
});
