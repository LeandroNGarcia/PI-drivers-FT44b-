import { ORDER_FILTER, SET_CURRENT_PAGE_TEAMS } from './actions/actionsTypes';
import { SET_CURRENT_PAGE } from './actions/actionsTypes';

const initialState = {
  drivers: [],
  currentPage:1,
  currentPageTeams:1,
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
    case SET_CURRENT_PAGE:
      return{
        ...state,
        currentPage:action.payload
      };
    case SET_CURRENT_PAGE_TEAMS:
      return {
        ...state,
        currentPageTeams:action.payload
      }
    default:
      return state;
  }
};

export default reducer;