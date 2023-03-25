
export const ADD_FAVORITE="ADD_FAVORITE";
export const RMV_FAVORITE="RMV_FAVORITE"
export const FILTER="FILTER";
export const ORDER="ORDER";

export const addFavorite=(character)=>{
    return {
        type: ADD_FAVORITE,
        payload:character
    }
}


export const rmvFavorite=(id)=>{
    return {
        type: RMV_FAVORITE,
        payload:id
    }
}

// export const filterCards=(gender)=>{
//     return{
//         type: FILTER,
//         payload:gender
//     }
// }

// export const orderCards=(id)=>{
//     return{
//         type: ORDER,
//         payload:ID
//     }
// }