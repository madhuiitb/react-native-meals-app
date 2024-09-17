import { createContext, useState } from "react";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => { },
    removeFavourite: (id) => { },
});


const FavouritesContextProvider = ({ children }) => {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);

    const addFavourite = (id) => {
        setFavouriteMealIds((currentFavIds)=>[...currentFavIds, id])
    }

    const removeFavourite = (id) => {
        setFavouriteMealIds((currentFavIds) => currentFavIds.filter((mealIds) => mealIds !== id));
    }

    const value = {
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite:removeFavourite,
    }

    return <FavouritesContext.Provider value={value}>
        {children}
    </FavouritesContext.Provider>
}

export default FavouritesContextProvider;