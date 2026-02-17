import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealList from "../components/MealsList/MealList";


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

    return (
        <MealList displayedMeals={displayedMeals}></MealList>
    );

}
export default MealOverviewScreen;


