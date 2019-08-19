import React, {Component} from 'react';
import Intro from './components/Intro';

class App extends Component{
  constructor(){
    super();
    this.state = {
      name: "",
      displayName: ""
    }

    //this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({name: e.target.value});
  }
  handleClick = () => {
    this.setState({displayName: this.state.name});
  }
  render(){
    
    return (
      <div>
        <Intro></Intro>
      <h1>{this.state.displayName}</h1>
      <input  onChange={this.handleChange}/>
      <button onClick={this.handleClick}>cLicK mE</button>
      </div>
    )
  }
}

export default App;