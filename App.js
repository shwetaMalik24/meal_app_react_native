import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealsDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { MEALS } from './data/dummy-data';
import { Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import FavouriteContextProvider from './store/context/favourite_context';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  function DrawerNavigator() {
    return (

      <Drawer.Navigator
        screenOptions={{
          // drawerContentStyle: {
          //   backgroundColor: '#351401', // dark brown
          // },
          // drawerInactiveTintColor: 'white',
          // drawerActiveTintColor: '#351401',
          // drawerActiveBackgroundColor: '#e4baa1',
        }}>
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="list"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="star"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    <FavouriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          //headerStyle: { backgroundColor: "#351401" },
          //headerTintColor: "white",
          //contentStyle: { backgroundColor: "#3f2f25" },
        }}>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="mealsDetailScreen" component={MealDetailScreen} options={({ route, navigation }) => {
            const mealId = route.params.mealId;
            const selectedMeal = MEALS.find((meal) => meal.id === mealId);

            function headerButtonHandler() {
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
          <Stack.Screen name="mealsOverview" component={MealOverviewScreen} options={({ route }) => { const catId = route.params.categoryId; return { title: catId } }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavouriteContextProvider>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <stack.Navigator screenOptions={{
//         //headerStyle: { backgroundColor: "#351401" },
//         //headerTintColor: "white",
//         //contentStyle: { backgroundColor: "#3f2f25" },
//       }}>
//         <stack.Screen name="mealsCategories" component={CategoriesScreen} options={{
//           title: "All Categories",
//           //headerStyle: { backgroundColor: "#351401" },
//           //headerTintColor: "white",
//           //contentStyle: { backgroundColor: "#3f2f25" },
//         }} />
//         <stack.Screen name="mealsDetailScreen" component={MealDetailScreen} options={({ route, navigation }) => {
//           const mealId = route.params.mealId;
//           const selectedMeal = MEALS.find((meal) => meal.id === mealId);

//           function headerButtonHandler() {
//           }

//           return {
//             title: selectedMeal.title,
//             headerRight: () => (
//               <Button
//                 title="★"
//                 onPress={headerButtonHandler}
//               />
//             ),
//           };
//         }} />
//         <stack.Screen name="mealsOverview" component={MealOverviewScreen} options={({ route }) => { const catId = route.params.categoryId; return { title: catId } }} />
//       </stack.Navigator>
//     </NavigationContainer>
//   );
// }