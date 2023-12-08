import { ORDER_FILTER } from './actionTypes';

const initialState = {
  drivers: [],
  orderBy: null,
  orderDirection: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_FILTER:
      return {
        ...state,
        orderBy: action.payload.orderBy,
        orderDirection: action.payload.orderDirection,
      };
      case 'FETCH_DRIVERS_SUCCESS':
        return {
          ...state,
          drivers: action.payload,
        };

      case 'FETCH_DRIVERS_FAILURE':
        return {
          ...state,
          error: action.payload,
        };

    default:
      return state;
  }
};

export default reducer;