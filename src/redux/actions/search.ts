import { ActionType } from "../actionsList";

export const setSearchTerm = (value: string) => ({
  type: ActionType.SET_SEARCH_TERM,
  payload: value,
});
