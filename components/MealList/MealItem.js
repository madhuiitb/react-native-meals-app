import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View, Platform } from "react-native";
import SelectedMeals from "../SelectedMeals";



const MealItem = ({id, title, imageUrl, duration, complexity, affordability }) => {
    const navigation = useNavigation();

    const mealDetailHandler = (item) => {
        navigation.navigate('MealDetail', {
            mealId:id
        });
        
    }

    return <View style={styles.mealItem}>
        <Pressable style={({ pressed }) => pressed ? styles.buttonPressed : null}
            android_ripple={{ color: '#c1c7c4' }}
            onPress={mealDetailHandler}
         >
            <View>
                <Image style={styles.image}
                    source={{ uri: imageUrl }} />
        <Text style={styles.title}>
            {title}
        </Text>
            </View>
            <SelectedMeals
                duration={duration}
                complexity={complexity}
                affordability={affordability}
            />
        </Pressable>
    </View>
}
export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,    
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#e6f1e6'
    },
    image: {
        width: '100%',
        height:200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin:8,
    },
   
    buttonPressed: {
        opacity: 0.5,
    },
})