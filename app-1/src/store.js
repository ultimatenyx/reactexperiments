import {createStore} from "redux";

function cartReducers(state={items:{}},action){
    switch(action.type){
        case "ADD_TO_CART": {
            console.log(action.payload);
            return state;
        }
        case "REMOVE FROM CART": {
            console.log(action.payload);
            return state;
        }
        default:
            return state;

    }
}
const store = createStore(cartReducers);

export default store;