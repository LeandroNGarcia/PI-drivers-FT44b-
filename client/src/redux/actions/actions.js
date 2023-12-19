import axios from "axios";
import { ORDER_FILTER, SET_CURRENT_PAGE } from "./actionsTypes";

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