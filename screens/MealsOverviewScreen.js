import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLayoutEffect } from "react";


//import { useRoute } from '@react-navigation/native';

function MealOverviewScreen({ route, navigation }) {
    //const route = useRoute();
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (cat) => cat.id === catId
        ).title;

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);


    function renderMealItem(itemData) {
        const item = itemData.item;
        console.log("meal overview");
        console.log(item.id);
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            onPress: () => {
                // next step: navigate to MealDetailScreen
                // navigation.navigate("MealDetail", { mealId: item.id });
            },
        };
        return <MealItem {...mealItemProps} />;
    }

    return <View style={style.container}>
        <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
}
export default MealOverviewScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center'
    }
});
