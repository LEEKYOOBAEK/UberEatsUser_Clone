import { StyleSheet,Text,View,FlatList } from "react-native";

// 각 레스토랑 데이터를 각각 가져오기 위한 컴포넌트
import RestaurantItem from "../../component/RestaurantItem";
//레스토랑의 데이터를 가져온다.
import Restaurants from '../../../assets/data/restaurants.json';


const HomeScreen = () => {
    return (
        <View style={styles.page}>
            <FlatList
            data={Restaurants}
            renderItem={({item}) => <RestaurantItem restaurant={item} />}
            />
        </View>       
    );
};

const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
   
});
  

export default HomeScreen;