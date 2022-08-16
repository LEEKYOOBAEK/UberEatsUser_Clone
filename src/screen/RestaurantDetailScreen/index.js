import {StyleSheet, Text, View, Image} from 'react-native';
import Restaurants from '../../../assets/data/restaurants.json';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
const restaurant = Restaurants[0];
const dish = Restaurants[0].dishes[0];

const RestaurantDetailScreen = () => {
    return (
        <View style={styles.page}>
              
            <Image source={{uri: restaurant.image }} style={styles.image} />
            <View>
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.subTitle}>${restaurant.deliveryFee} &#8226; {restaurant.rating} ⭐</Text>
            </View>
            <View style={styles.seperator}></View>
            <Text>Menu</Text>
            
          
            <View style={styles.row}>
                <View style={{flex:1}}>
                    <Text style={styles.dishname}>{dish.name}</Text>
                    <Text style={styles.dishdescription}>{dish.description}</Text>
                    <Text style={styles.dishprice}>${dish.price}</Text>
                </View>
                <View>
                    <Image source={{uri: dish.image}} style={styles.dishImage}/>
                </View>
            </View>
            <Ionicons 
                
                name="arrow-back-circle" 
                size={45} 
                color="white" 
                style={styles.iconContainer}
            />
            
        </View>
    );
};

export default RestaurantDetailScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    
    row: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center"
        // width: "100%",
    },
    iconContainer: {
        position: "absolute",
        top: 40,
        left: 10,
      },
    image: {
        
        width: "100%",
        aspectRatio: 5/3,
      },
      name: {
        fontSize: 30,
        fontWeight:"600",
        marginVertical: 10,
      },
      subTitle: {
        fontSize: 15,
        color: "gray",
      },
      seperator: {
        width: "100%",
        height: 0.5,
        backgroundColor: "lightgray",
        marginVertical: 10
      },
      dishImage: {
        width: 75,
        aspectRatio: 1,
      },
      dishname: {
        fontSize: 16,
        fontWeight: "600",
      },
      dishdescription: {
        fontSize: 14,
        color: "gray",
        marginVertical: 5,
      },
      dishprice: {
        fontWeight: "500",
      },
      

      
});