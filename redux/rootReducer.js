import { combineReducers } from "redux";
import CartSlice from './cart/cartReducer'

const rootReducer=combineReducers({
    CartSlice,
})
export default rootReducer;