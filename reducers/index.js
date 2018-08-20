import { SET_MODE, FINISH_LOAD_FONTS } from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case FINISH_LOAD_FONTS: {
            return Object.assign({}, state, {
                isLoading: false
            })
        }
        case SET_MODE: {
            return Object.assign({}, state, {
                mode: action.mode
            });
        }
        default:
            return state
    }
};