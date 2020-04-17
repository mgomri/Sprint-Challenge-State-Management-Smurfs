import React from 'react';
import { Smurf } from './Smurf';
export const SmurfList = props => {
    return(
        <div className='smurf-list'>
            {props.state.smurf.map(smf => <Smurf smurf={smf} key={smf.id} state={props.state} />)}
        </div>
    )
}