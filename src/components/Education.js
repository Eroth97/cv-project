import React, {Component} from 'react';
import Div from './Divs';

class Education extends Component{
  constructor(props){
    super(props);
    this.state = {
      school: '',
      degree: '',
      from: '',
      to: '',};
    this.handleChange = this.handleChange.bind(this); 
  }

  handleChange(event){
    let {school, degree, from, to} = this.state;
    if(event.target.name === 'School'){school = event.target.value}
    else if(event.target.name === 'Degree'){degree = event.target.value}
    else if(event.target.name === 'from'){from = event.target.value}
    else if(event.target.name === 'to'){to = event.target.value}
    this.setState({school, degree, from, to});
    console.log(this.state);
  }

  render(){
    return(<div className='column'>
      <h2>Educational Experience</h2>
      <form>
        <Div text='School Name' name='School' type='text' changing={this.handleChange} value={this.state.value} />
        <Div text='Degree' name='Degree' type='text' changing={this.handleChange} value={this.state.degree} />
        <Div text='from' name='from' type='date' changing={this.handleChange} value={this.state.from} />
        <Div text='to' name='to' type='date' changing={this.handleChange} value={this.state.to} />
        <div id='button2'><button type='submit'>Click here to submit</button></div>
      </form>
      </div>);
  }
}

export default Education;