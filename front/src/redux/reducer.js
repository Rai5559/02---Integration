import { ADD_FAVORITE, FILTER, RMV_FAVORITE, ORDER, GET_FAVORITES } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case RMV_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (element) => element.id !== action.payload
        ),
      };

      case FILTER:
            
      const filteredChars = state.myFavorites.filter((element) => element.gender === action.payload)
      return{
          ...state,
          myFavorites: filteredChars
      }

        case ORDER:
            return{
                ...state,
                myFavorites:
                action.payload === "Ascendente"
                ? state.myFavorites.sort((a,b)=>a.id-b.id)
                : state.myFavorites.sort((a,b)=>b.id-a.id)
            }

        case GET_FAVORITES:
            return{
                ...state,
                myFavorites: action.payload
            }


    default:
      return { ...state };
  }
};

export default reducer;
