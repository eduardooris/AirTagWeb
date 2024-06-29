// store.js
import { createStore, combineReducers } from 'redux';
import root from './rootReducer';

const rootReducer = combineReducers({
    dataRoot: root,
});

const store = createStore(rootReducer);

export default store;