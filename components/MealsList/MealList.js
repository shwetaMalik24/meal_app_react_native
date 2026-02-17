import MealItem from "./MealItem";
import { FlatList, StyleSheet, View } from "react-native";
function MealList({ displayedMeals }) {
    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
            onPress: () => { },
        };
        return <MealItem {...mealItemProps} />;
    }

    return <View style={style.container}>
        <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
}

export default MealList;
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center'
    }
});