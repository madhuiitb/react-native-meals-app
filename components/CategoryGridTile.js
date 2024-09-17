import { Pressable, StyleSheet, View, Text, Platform } from "react-native";

import {useNavigation } from '@react-navigation/native';

const CategoryGridTile = ({ title, color, onPress }) => {
    
    return <View style={styles.gridItem}>
        <Pressable style={({pressed}) => [styles.pressableContainer, pressed ? styles.buttonPressed :null]}
            android_ripple={{ color: '#c1c7c4' }}
            onPress={onPress}
        >
            <View style={[styles.innerView, { backgroundColor: color }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 140,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,  
        overflow: Platform.OS === 'android' ? 'hidden' :'visible',
        backgroundColor: '#e6f1e6'
    },
    pressableContainer: {
        flex:1,
    },
    buttonPressed: {
        opacity:0.5,
    },
    innerView: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems:'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        
    }
});