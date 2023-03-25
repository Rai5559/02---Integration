import { ADD_FAVORITE, RMV_FAVORITE } from "./actions";

const initialState={
    myFavorites:[],
    //allCharacters:[]
}

const reducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_FAVORITE:
            return {...state, myFavorites:[...state.myFavorites, action.payload]};
            
        case RMV_FAVORITE:
            return {...state, myFavorites:state.myFavorites.filter((element)=>element.id!==action.payload),};


        default: return {...state};
        
    }
}


export default reducer;