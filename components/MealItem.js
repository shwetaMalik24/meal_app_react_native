import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';


function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();
    function onPressHandler() {
        console.log("navigate" + { id });
        navigation.navigate("mealsDetailScreen", {
            mealId: id,
        });
    }
    return (
        <Pressable onPress={onPressHandler}>
            <View style={styles.item}>
                <View> <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text></View>
                <View style={styles.details}>
                    <Text style={styles.detailsItem}>{duration}</Text>
                    <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    item: {
        margin: 20,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.75,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
        padding: 10
    },
    image: {
        width: "100%",
        height: 200
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailsItem: {
        marginHorizontal: 8
    }
});
