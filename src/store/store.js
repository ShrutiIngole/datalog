import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    current: {
        moving: false,
        floor: 1,
        dest: null,
        people: 0,
        time: 0,
    },
    logs: []
}
const store = createStore(reducer, initialState)

export default store;