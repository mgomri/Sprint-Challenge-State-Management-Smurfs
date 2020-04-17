import axios from 'axios';

export const IN_PROGRESS = 'IN_PROGRESS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const START_REQ = 'START_REQ';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';


export const getSmurfs = () => dispatch => {
    dispatch({ type: IN_PROGRESS})
    
   axios.get('http://localhost:3333/smurfs')
        .then(response => dispatch({type: SUCCESS, payload: response.data}))
        .catch(error => dispatch({type: FAILURE, payload: error}))    
    }




const apiUrl = 'http://localhost:3333/smurfs';

export const addSmurf = ({name, age, height}) => dispatch => {
    dispatch({ type: START_REQ })
    axios.post(`${apiUrl}`, {name, age, height})
        .then(response => dispatch({type: ADD_SMURF, payload: {
            _id: response.data._id,
            name: response.data.name,
            age: response.data.age,
            height: response.data.height
        } }))
    .catch(error => {
        throw(error);
    });
};
