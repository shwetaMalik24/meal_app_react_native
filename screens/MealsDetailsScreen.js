import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";


function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(
        (meal) => meal.id === mealId
    );

    function buttonPressed() {
        console.log("button pressed!!");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    icon="star"
                    color="black"
                    size={24}
                    onPress={buttonPressed}
                />
            ),
        });
    }, [navigation, buttonPressed]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
                <Text style={styles.title}>{selectedMeal.title}</Text>,
                <View style={styles.details}>
                    <Text style={styles.detailsItem}>{selectedMeal.duration}m</Text>
                    <Text style={styles.detailsItem}>{selectedMeal.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItem}>{selectedMeal.affordability.toUpperCase()}</Text>
                </View>,
                <Text style={styles.title}>Ingredients</Text>,
                <View style={styles.ingredientsContainer}>
                    {selectedMeal.ingredients.map((ingredient) => (
                        <Text key={ingredient} style={styles.ingredientText}>
                            {ingredient}
                        </Text>
                    ))}
                </View>
                <Text style={styles.title}>Steps</Text>
                <View style={styles.ingredientsContainer}>
                    {selectedMeal.steps.map((step) => (
                        <Text key={step} style={styles.ingredientText}>
                            {step}
                        </Text>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,

    },
    image: {
        width: "100%",
        height: 400
    },
    details: {
        flexDirection: 'row',
    },
    detailsItem: {
        marginHorizontal: 8
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 20
    },
    ingredientsContainer: {
        backgroundColor: '#e0e0e0',
        width: "100%",
        padding: 4,
        borderRadius: 6,
    },
    ingredientText: {
        fontSize: 16,
        paddingBottom: 12
    }
});
export default MealDetailScreen;
