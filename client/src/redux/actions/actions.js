import axios from 'axios';
import { ORDER_FILTER } from './actionsTypes';

export const orderFilter = ({ orderBy, orderDirection }) => ({
  type: ORDER_FILTER,
  payload: { orderBy, orderDirection },
});

export const fetchDrivers = ({ orderBy, orderDirection }) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/order/?orderBy=${orderBy}&orderDirection=${orderDirection}`);

      dispatch({
        type: 'FETCH_DRIVERS_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      console.error('Error:', error);
      dispatch({
        type: 'FETCH_DRIVERS_FAILURE',
        payload: 'Hubo un error al obtener los conductores',
      });
    }
  };
};