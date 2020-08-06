import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {loginReducer} from "../../cnf-2-fatures/f-1-auth/a-1-login/l-2-bll/loginReducer";
import {registerReducer} from "../../cnf-2-fatures/f-1-auth/a-2-register/r-2-bll/registerReducer";
import {DEV_VERSION} from "../../config";
import {profileReducer} from "../../cnf-2-fatures/f-1-auth/a-7-profile/p-2-bll/profileReducer";
// import {packsReducer} from "../../cnf-2-fatures/f-2-cards/c-1-packs/p-2-bll/packsReducer";
// import {cardsReducer} from "../../cnf-2-fatures/f-2-cards/c-2-cards/c-2-bll/cardsReducer";

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,

    profile: profileReducer,

    // packs: packsReducer,
    // cards: cardsReducer,

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>

if (DEV_VERSION) {
    // @ts-ignore
    window.store = store; // for dev
}
