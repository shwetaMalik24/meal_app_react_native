import { createContext, useState } from "react";
export const FavoritesContext = createContext({
    ids: [],
    addFavourite: (id) => { },
    removeFavourite: (id) => { },
});

function FavouriteContextProvider({ children }) {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);
    function addFavourite(id) {
        setFavouriteMealIds((currentFavouriteIds) => [...currentFavouriteIds, id]);

    }

    function removeFavourite(id) {
        setFavouriteMealIds((currentFavouriteIds) => currentFavouriteIds.filter(mealId => mealId != id));
    }
    const value = {
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>

}
export default FavouriteContextProvider;