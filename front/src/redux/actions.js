import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const RMV_FAVORITE = "RMV_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVORITES = "GET_FAVORITES";

export const rmvFavorite = (id) => {
  return {
    type: RMV_FAVORITE,
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orderBy) => {
  return {
    type: ORDER,
    payload: orderBy,
  };
};

export const getFavorites = () => {
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001";
    const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};
