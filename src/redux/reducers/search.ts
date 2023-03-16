import { ActionType } from "../actionsList";
import { SearchAction, SearchState } from "../types/search";

const initialState: SearchState = {
  searchTerm: "",
};

const searchReducer = (
  state = initialState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case ActionType.SET_SEARCH_TERM: {
      return { ...state, searchTerm: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
