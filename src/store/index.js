import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productReducer} from "./productReducer";
import {orderReducer} from "./orderReducer";


const rootReducer = combineReducers({
  productReducer,
  orderReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))