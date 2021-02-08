import constants from '../constants';
const { GET_SLIDE_IMAGE, GET_SERVICES_DATA } = constants;
const initialState = [];

export default function mainReducer (state = initialState, action) {
    switch (action.type) {
        case GET_SLIDE_IMAGE:
            return { ...state, imageData: action.Payload ? action.Payload : [] };
        case GET_SERVICES_DATA:
            return { ...state, serviceData: action.Payload ? action.Payload : [] };
        default:
            return state
    }
}