import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
 FactReducer,
  
} from "./reducers/FactReducer";

const reducers = combineReducers({
  Fact: FactReducer,
});

const factDataFromStorage = localStorage.getItem("factData")
  ? JSON.parse(localStorage.getItem("factData"))
  : [];

const initialState = {
  factData: { factData: factDataFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
