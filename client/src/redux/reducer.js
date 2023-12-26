import { ORDER_FILTER, SET_ACCESS, SET_CURRENT_PAGE_TEAMS, SET_CURRENT_PATH, SET_DELETE } from './actions/actionsTypes';
import { SET_CURRENT_PAGE } from './actions/actionsTypes';

const initialState = {
  drivers: [],
  currentPage:1,
  currentPageTeams:1,
  curretnPath:"",
  access:false,
  deleteStatus:false,
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
    case SET_CURRENT_PATH:
      return {
        ...state,
        curretnPath:action.payload
      }
    case SET_ACCESS:
      return {
        ...state,
        access:action.payload
      }
    case SET_DELETE:
      return {
        ...state,
        deleteStatus:action.payload
      }
    default:
      return state;
  }
};

export default reducer;