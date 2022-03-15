import itemsReducer from "./itemsReducer";
import { createStore } from 'redux'


const store = createStore(itemsReducer);

export default store;