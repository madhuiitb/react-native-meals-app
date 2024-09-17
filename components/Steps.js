import { StyleSheet, Text, View } from "react-native";

const Steps = ({title,data}) => {
    return <View style={styles.details}>
        <Text style={styles.title}>
            {title}
        </Text>
        {data.map((item) => (
            <View key={item} style={styles.listItem}>
                <Text key={item} style={styles.detailItem} >{item}</Text>
            </View>
        ))}
    </View>
}
export default Steps;

const styles = StyleSheet.create({
    details: {
         alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
        marginHorizontal: 16,
        borderColor: '#708eb7',
        borderWidth: 1,
        marginVertical: 4,
        borderRadius: 8,
       
    },
    listItem: {
        borderRadius: 6,
        backgroundColor: '#aaaeda',
        margin: 8,
        padding: 8,
        width: '80%',
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 14,
        color: '#091bea'
    },
    title: {
        justifyContent: 'center',
        alignItems:'center',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});