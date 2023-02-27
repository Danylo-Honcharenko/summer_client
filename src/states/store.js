import {createStore} from 'redux';

const initialStore = {};

const rootReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {...state, data: action.payload};
        case 'SET_DATA_ERR':
            return {...state, dataErr: action.payload};
        default:
            return state;
    }
}

const store = createStore(rootReducer);
export default store;