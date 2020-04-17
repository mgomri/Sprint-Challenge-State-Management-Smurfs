import React from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/actions';
import { addSmurf } from '../actions/actions';
import { SmurfList } from './SmurfList';
import  { NewSmurf } from './NewSmurf';

const App = props => {


  const fetchSmurfs = e => {
    e.preventDefault();
    props.getSmurfs();
}

const addSmurfs = newSmurf => {
  props.addSmurf(newSmurf);
  
}

  return (
    <div className="App">
      <h1 className='title'>SMURFS! 2.0 W/ Redux</h1>
      <div className='header'>
        <button className='button is-info is-outlined' 
        onClick={fetchSmurfs}>Fetch Smurfs</button>
        <NewSmurf addSmurfs={addSmurfs}/>
      </div>
      <SmurfList state={props.state}/>
    </div>
  );
}

const mapStateToProps = state => {
  return { 
    state: state
  }
}
export default connect(mapStateToProps, { getSmurfs, addSmurf}) (App);
