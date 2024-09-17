
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import SelectedMeals from "../components/SelectedMeals";
import Steps from "../components/Steps";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourite";
// import { FavouritesContext } from "../store/context/favourite-context";

const MealDetails = ({ route, navigation }) => {

    // const favouriteMealContext = useContext(FavouritesContext);
    const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
    
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const meals = MEALS.find((meal) => meal.id === mealId);

     const mealIsFavourite = favouriteMealIds.includes(mealId);


    const changeFavouriteStatus = () => {
        if (mealIsFavourite) {
            // favouriteMealContext.removeFavourite(mealId);
            dispatch(removeFavourite({id:mealId}))
        } else {
            // favouriteMealContext.addFavourite(mealId);
            dispatch(addFavourite({id:mealId}))
       }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    icon={mealIsFavourite ? 'star' :'star-outline'}
                    color='white'
                    onPress={changeFavouriteStatus}
                />
                
                // <Button title='Tap me!' onPress={changeFavouriteStatus} />
            }
        });
    },[navigation, changeFavouriteStatus])

    return <ScrollView>
        <Image style={styles.image} source={{ uri: meals.imageUrl}}/>
        <Text style={styles.title}>
          {meals.title}
        </Text>
        <SelectedMeals
            duration={meals.duration}
            complexity={meals.complexity}
            affordability={meals.affordability}
        />
        
             <Steps title='Ingredients' data={meals.ingredients} />
        <Steps title='Steps' data={meals.steps} />
       </ScrollView>
   
}

export default MealDetails;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
})