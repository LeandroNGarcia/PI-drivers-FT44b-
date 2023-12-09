import { ORDER_FILTER } from './actions/actionsTypes';

const initialState = {
  drivers: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_FILTER:
      return {
        ...state,
        drivers: action.payload.drivers,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;