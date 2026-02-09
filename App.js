import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealsDetailsScreen';
import { MEALS } from './data/dummy-data';
import { Button } from 'react-native';
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        //headerStyle: { backgroundColor: "#351401" },
        //headerTintColor: "white",
        //contentStyle: { backgroundColor: "#3f2f25" },
      }}>
        <stack.Screen name="mealsCategories" component={CategoriesScreen} options={{
          title: "All Categories",
          //headerStyle: { backgroundColor: "#351401" },
          //headerTintColor: "white",
          //contentStyle: { backgroundColor: "#3f2f25" },
        }} />
        <stack.Screen name="mealsDetailScreen" component={MealDetailScreen} options={({ route, navigation }) => {
          const mealId = route.params.mealId;
          const selectedMeal = MEALS.find((meal) => meal.id === mealId);

          function headerButtonHandler() {
            console.log("Favorite pressed for:", mealId);
          }

          return {
            title: selectedMeal.title,
            headerRight: () => (
              <Button
                title="★"
                onPress={headerButtonHandler}
              />
            ),
          };
        }} />
        <stack.Screen name="mealsOverview" component={MealOverviewScreen} options={({ route }) => { const catId = route.params.categoryId; return { title: catId } }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}