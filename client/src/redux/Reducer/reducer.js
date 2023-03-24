import {
    GET_SHIPS,
    GET_SHIP_ID
} from "../Actions/actions";

const initialState = {
    ships:[],
    detail:{}
};

function reducer (state = initialState, action){
    switch (action.type) {
        case GET_SHIPS:
            return{
                ...state,
                ships: action.payload,
            }
        case GET_SHIP_ID:
            return{
                ...state,
                detail: action.payload,
            }
        default:
            return{
                ...state
            }
    }
};

export default reducer;