import { FETCH_SENT, FETCH_SUCCESS, FETCH_FAIL } from "../actions";
const initialState = {
  characters: {},
  isLoading: true,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_SENT:
      break;
    case FETCH_SUCCESS:

      break;
    case FETCH_FAIL:
      break;
    default:
      return state;
  }
};
