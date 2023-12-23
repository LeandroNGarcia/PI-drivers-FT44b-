import axios from "axios";
import { ORDER_FILTER, SET_CURRENT_PAGE, SET_CURRENT_PAGE_TEAMS, SET_CURRENT_PATH } from "./actionsTypes";

export const orderFilter = (orderBy, orderDirection) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/order`, {
        params: { orderBy, orderDirection },
      });

      dispatch({
        type: ORDER_FILTER,
        payload: {
          drivers: response.data,
          error: null,
        },
      });
    } catch (error) {
      dispatch({
        type: ORDER_FILTER,
        payload: {
          drivers: [],
          error: { error: "Hubo un error al obtener los conductores", message: error.message },
        },
      });
    }
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
}

export const setCurrentPageTeams = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE_TEAMS,
    payload: currentPage,
  };
}

export const setCurrentPath = (currentPage) => {
  return {
    type: SET_CURRENT_PATH,
    payload: currentPage,
  };
}