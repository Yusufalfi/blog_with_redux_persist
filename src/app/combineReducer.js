import { combineReducers } from "redux";
import PostReducer from "./Post/PostSlice";
import UserReducer from "./User/UserSlice";

const rootReducer = combineReducers({
    post: PostReducer,
    user: UserReducer,

})

export default rootReducer;