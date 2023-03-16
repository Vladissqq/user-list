import * as UsersActionCreators from "./users";
import * as SearchActionCreators from "./search";

const actions = { ...UsersActionCreators, ...SearchActionCreators };

export default actions;
