import { recOrderListRedux } from "../Reducers/ReceivedOrdersListReducer";
import { regUsersListReducer, regUsersListReducerPostData } from '../Reducers/RegUsersListReducer';
import { alcholicPerfumesReducer } from "../Reducers/AlcholicPerfumesReducer";
import { nonAlcholicPerfumeReducer } from "../Reducers/NonAlcholicPerfumesReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const allReducers = combineReducers({ regUsersListReducer, alcholicPerfumesReducer, nonAlcholicPerfumeReducer, recOrderListRedux, regUsersListReducerPostData });

export const storeData = createStore(allReducers, {}, applyMiddleware(thunk));
