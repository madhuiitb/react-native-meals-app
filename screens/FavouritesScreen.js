import { useContext } from "react";
import { View,StyleSheet, Text } from "react-native";
import { FavouritesContext } from "../store/context/favourite-context";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const Favourites = () => {
    // const favouriteMealsContext = useContext(FavouritesContext);
   const favouriteMealsRedux=  useSelector((state)=>state.favouriteMeals.ids)

    const favouriteMeals = MEALS.filter((meals) => favouriteMealsRedux.includes(meals.id))
    
    if (favouriteMeals.length === 0) {
        return <View style={styles.container}>
            <Text style={styles.text}>
                You have no favourite meals yet.
           </Text>
        </View>
    } else {
        return <MealsList items={favouriteMeals} />
    }    
}
export default Favourites;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#e8e8d1'
    },
    text: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color:'#3f24ed'
    }
})