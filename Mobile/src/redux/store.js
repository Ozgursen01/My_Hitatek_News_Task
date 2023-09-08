import { createStore, combineReducers, applyMiddleware } from 'redux';
import { dataReducer } from './reducers'; 
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  data: dataReducer, 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
