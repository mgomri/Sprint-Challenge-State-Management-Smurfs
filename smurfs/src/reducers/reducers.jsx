import { IN_PROGRESS, SUCCESS, FAILURE } from '../actions/actions';
import { ADD_SMURF, DELETE_SMURF, FETCH_SMURF } from '../actions/actions';
import { combineReducers } from 'redux'

const initialState = {
    smurf : [],
    fetching: false,
    error: ''
}

export const getReducer = (state = initialState, action) => {
    switch(action.type){
        case IN_PROGRESS:
            return {
                ...state, 
                fetching: true,
                error: ''
            };

        case SUCCESS:
            return {
                ...state,
                smurf: action.payload,
                fetching: false,
                error: ''
                
            };

        case FAILURE:
            return {
                ...state,
                smurf:[],
                fetching:false, 
                error: action.payload
            }
      default:
          return state;
    }
}


export const postReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SMURF:
      return [...state, action.payload];
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
    getReducer, postReducer
})