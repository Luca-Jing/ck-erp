import { hierarchyReducers } from "./hierarchy";
import { combineReducers } from "redux";

//rootReducer and state type
const rootReducer = combineReducers({
  hierarchy: hierarchyReducers
});
export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
