import React, {Component} from 'react';

class GeneralInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      edit: true,
    }
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
  }

  handleChange(event){
    let {firstName, lastName, email, phone, edit} = this.state;
    if (event.target.name === 'firstName') {firstName = event.target.value}
    else if (event.target.name === 'lastName') {lastName = event.target.value}
    else if (event.target.name === 'email') {email = event.target.value}
    else if (event.target.name === 'phone') {phone = event.target.value}

    this.setState({firstName, lastName, email, phone, edit});
  }

  handleSubmission(event){
    event.preventDefault();
    this.changeLayout();
  }

  changeLayout(){
    let {firstName, lastName, email, phone, edit} = this.state;
    edit = edit? false: true;
    this.setState({firstName, lastName, email, phone, edit});
  }

  render(){
    if (this.state.edit === true){
    return(<div className='column'>
      <h2>General Information</h2>
      <form action='' onSubmit={this.handleSubmission}>
        <div className='column'>
          <label htmlFor='firstName'>First Name</label>
          <input name='firstName' type='text' onChange={this.handleChange} value={this.state.firstName} required />
        </div>

        <div className='column'>
          <label htmlFor='lastName'>Last Name</label>
          <input name='lastName' type='text' onChange={this.handleChange} value={this.state.lastName} required />
        </div>

        <div className='column'>
          <label htmlFor='email'>Email</label>
          <input name='email' type='email' onChange={this.handleChange} value={this.state.email} required />
        </div>

        <div className='column'>
          <label htmlFor='phone'>Phone Number</label>
          <input name='phone' type='number' onChange={this.handleChange} value={this.state.phone} required />
        </div>
        
        <div id='button1'>
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>)} else{
      return (<div className='column'>
        <div>
          <h2>General Information</h2>
          <button onClick={this.changeLayout}>Edit</button>
        </div>        
        <p><b>First Name:</b> {this.state.firstName}</p>
        <p><b>Last Name:</b> {this.state.lastName}</p>
        <p><b>Email:</b> {this.state.email}</p>
        <p><b>Phone Number</b>: {this.state.phone}</p>
        </div>);
    }
  }
}

export default GeneralInfo;