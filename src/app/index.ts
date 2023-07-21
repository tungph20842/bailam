import { productReducer } from '@/reducers/Product';
import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const rootReducer = combineReducers({
    products: productReducer
})

const store = createStore(rootReducer, enhancer);

export default store;

