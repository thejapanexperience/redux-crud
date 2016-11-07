import { combineReducers } from 'redux';
import children from './children';
import sorting from './sorting';
import searching from './searching';

export default combineReducers({ children, sorting, searching });
