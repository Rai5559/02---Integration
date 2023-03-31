import { ADD_FAVORITE, FILTER, RMV_FAVORITE, ORDER } from "./actions";

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
            
            const allCharactersFIltered=state.allCharacters.filter(char=>char.gender===action.payload)
            return {
                ...state,
                myFavorites: allCharactersFIltered
            }

        case ORDER:
            return{
                ...state,
                myFavorites:
                action.payload === "Ascendente"
                ? state.allCharacters.sort((a,b)=>a.id-b.id)
                : state.allCharacters.sort((a,b)=>b.id-a.id)
            }


    default:
      return { ...state };
  }
};

export default reducer;
