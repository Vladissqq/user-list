import { ActionType } from "../actionsList";

export interface SearchState {
  searchTerm: string;
}

interface SetSearchTermAction {
  type: ActionType.SET_SEARCH_TERM;
  payload: string;
}

export type SearchAction = SetSearchTermAction;
