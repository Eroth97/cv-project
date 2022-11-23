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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let {firstName, lastName, email, phone} = this.state;
    if (event.target.name === 'firstName') {firstName = event.target.value}
    else if (event.target.name === 'lastName') {lastName = event.target.value}
    else if (event.target.name === 'email') {email = event.target.value}
    else if (event.target.name === 'phone') {phone = event.target.value}

    this.setState({firstName, lastName, email, phone});
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
          <input name='firstName' type='text' onChange={this.handleChange} required />
        </div>

        <div className='column'>
          <label htmlFor='lastName'>Last Name</label>
          <input name='lastName' type='text' onChange={this.handleChange} required />
        </div>

        <div className='column'>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' onChange={this.handleChange} required />
        </div>

        <div className='column'>
          <label htmlFor='phone'>Phone Number</label>
          <input name='phone' type='number' onChange={this.handleChange} required />
        </div>
        
        <div id='button1'>
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>)
  }
}

export default GeneralInfo;