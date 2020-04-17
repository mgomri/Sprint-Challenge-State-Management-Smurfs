import React from 'react';

export const Smurf = props => {
    
    return(
        <div className='box smurf'>
            <h3 className='title is-4'>Name: {props.smurf.name}</h3>
            <h3 className='title is-4'>Age:  {props.smurf.age}</h3>
            <h3 className='title is-4'>Height:  {props.smurf.height}</h3>
            {props.state.error && <p className='error'>{props.error}</p>}
        </div>
    );
}