import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cartReducers from "./cart";
import CategoriesReducer from "./categories";

const reducer = combineReducers({
    cart:cartReducers,
    categories: CategoriesReducer
})

const store = createStore(reducer,applyMiddleware(thunk));
export default store;