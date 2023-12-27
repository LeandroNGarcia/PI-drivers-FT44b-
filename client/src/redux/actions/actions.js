import axios from "axios";
import { ORDER_FILTER, SET_ACCESS, SET_CURRENT_PAGE, SET_CURRENT_PAGE_TEAMS, SET_CURRENT_PATH, SET_DELETE, SET_ID_DELETE } from "./actionsTypes";

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
        },
      });
    } catch (error) {
      alert(error)
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

export const setAccess = (boolean) => {
  return {
    type: SET_ACCESS,
    payload: boolean,
  };
}

export const setDelete = (boolean) => {
  return {
    type: SET_DELETE,
    payload: boolean,
  };
}

export const setIdDelete = (id) => {
  return {
    type: SET_ID_DELETE,
    payload: id,
  };
}