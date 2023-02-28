import {receivedOrdersListReducers}  from "../Reducers/ReceivedOrdersListReducer";
import {regUsersListReducer} from '../Reducers/RegUsersListReducer';
import {alcholicPerfumesReducer}  from "../Reducers/AlcholicPerfumesReducer";
import {nonAlcholicPerfumeReducer} from "../Reducers/NonAlcholicPerfumesReducer";
import {combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const allReducers = combineReducers({regUsersListReducer, alcholicPerfumesReducer, nonAlcholicPerfumeReducer, receivedOrdersListReducers });

export const storeData = createStore(allReducers, {}, applyMiddleware(thunk));
