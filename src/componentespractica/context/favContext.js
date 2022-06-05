import {createContext} from "react";
import { useState } from "react";

export const FavContext = createContext({

})

export const FavProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (movieID) => {
        setFavorites (current => {
            return current.concat(movieID)
        })
    }
    const clearFavorites = () => { 
        setFavorites ([])
     }

    const context = {
        favorites,
        addToFavorites,
        clearFavorites,
    }
  return (
      <FavContext.provider value = {context}>
          {children}
      </FavContext.provider>
    
  )
}
