import { ActionTypes } from "../actions/action-types";
/// this function takes the current state of the application and 
/// an action object and returns  a new state of the application
const initialState = {
    results: [],
    loading: false,
    setLoading: false,
    pageNumber: 0,
};



export const userReducers = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.GET_USERS:
            
            return { results: action.payload.results, ...state.results}
            // return {
               
            //     ...state,
            //     /// update the copy with the new value
            //     results: action.payload, loading: false
            //     // results: {action.payload, ...state.results},
            // }
        case ActionTypes.GET_USER:
            return { results: action.payload, ...state.results}
        case ActionTypes.ADD_USER:
            return { ...state, user: action.payload }

        case ActionTypes.IMAGE_USER_CREATE:
            return { ...state, user: action.payload }

            case ActionTypes.IMAGE_USER_EDIT:
                return { results: action.payload, ...state.results}

                case ActionTypes.IMAGE_USER_UPDATE:          
                    // return { ...state, id: action.payload }
                    // return { ...state, id: action.payload }
                    // return { ...state, id: action.payload }
                    return { ...state, id: action.payload }
        case ActionTypes.UPDATE_USER:
          
            // return { ...state, id: action.payload }
            return { ...state, id: action.payload }
        case ActionTypes.DELETE_USER:
            return { ...state }
        default:
            // otherwise return the existing state unchanged
            return state
    }
}