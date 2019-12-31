import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../reducers/root_reducer';
import {myThunk} from '../middleware/thunk';

const configureStore = (preloadedState = {}) => {
    return createStore(
        RootReducer,
        preloadedState,
        applyMiddleware(myThunk)
    )
}

export default configureStore;