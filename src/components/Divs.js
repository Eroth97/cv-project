import React, {Component} from "react";

class Div extends Component{
  render(){
    return(<div className='column'>
      <label htmlFor={this.props.name}>{this.props.text}</label>
      <input name={this.props.name} type={this.props.type} onChange={this.props.changing} value = {this.props.value}/>
    </div>)
  }
}

export default Div;