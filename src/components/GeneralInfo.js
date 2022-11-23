import React, {Component} from 'react';

class GeneralInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
    }
    this.handleSubmission = this.handleSubmission.bind(this);
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
  }

  changeFirstName(event){
    this.setState({
      firstName: event.target.value,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
    })
  }

  changeLastName(event){
    this.setState({
      firstName: this.state.firstName,
      lastName: event.target.value,
      email: this.state.email,
      phone: this.state.phone,
    })
  }

  changeEmail(event){
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: event.target.value,
      phone: this.state.phone,
    })
  }

  changeNumber(event){
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: event.target.value,
    })  
  }

  handleSubmission(event){
    event.preventDefault();
    console.log(this.state);
  }

  render(){
    return(<div className='column'>
      <h2>General Information</h2>
      <form action='' onSubmit={this.handleSubmission}>
        <div className='column'>
          <label htmlFor='firstName'>First Name</label>
          <input name='firstName' type='text' onChange={this.changeFirstName} required />
        </div>

        <div className='column'>
          <label htmlFor='last-Name'>Last Name</label>
          <input name='last-Name' type='text' onChange={this.changeLastName} required />
        </div>

        <div className='column'>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' onChange={this.changeEmail} required />
        </div>

        <div className='column'>
          <label htmlFor='number'>Phone Number</label>
          <input name='number' type='number' onChange={this.changeNumber} required />
        </div>
        
        <div id='button1'>
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>)
  }
}

export default GeneralInfo;