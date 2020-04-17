import React, { Component } from 'react';

export class NewSmurf extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            age: '',
            height: ''
        }
    }

    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurfs(this.state);
        this.setState({ 
            name: '',
            age: '',
            height: '',
            
        });
          
      };
    
     

    render() { 
        return ( 
        
        <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Name"
              className="input is-info"
              name="name"
              onChange={ this.handleInputChange }
              value={ this.state.name }
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="Age"
              className="input is-info"
              name="age"
              onChange={ this.handleInputChange }
              value={ this.state.age }
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="height"
              className="input is-info"
              name="height"
              onChange={ this.handleInputChange }
              value={ this.state.height } 
              />
          </div>

          <div className="form-group">
            <button type="submit" className="button is-primary is-outlined add">Add Smurf</button>
          </div>
        </form>
      </div>  );
    }
}
 
 
 