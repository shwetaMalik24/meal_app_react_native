import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {

  function renderCategoriesItem(itemData) {

    function onPressHandler() {
      navigation.navigate("mealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      navigation={navigation}
      onPressed={onPressHandler}>
    </CategoryGridTile>
  }
  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id}
    renderItem={renderCategoriesItem}
    numColumns={2}
  />
}

export default CategoriesScreen;