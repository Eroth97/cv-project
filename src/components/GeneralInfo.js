import React, {Component} from 'react';

class GeneralInfo extends Component{
  constructor(props){
    super(props);
    this.handle = this.handle.bind(this);
  }

  handle(event){
    event.preventDefault();
    console.log(event.target);
  }

  render(){
    return(<div className='column'>
      <h2>General Information</h2>
      <form>
        <div className='column'>
          <label htmlFor='first-Name'>First Name</label>
          <input id='first-Name' type='text' />
        </div>

        <div className='column'>
          <label htmlFor='last-Name'>Last Name</label>
          <input id='last-Name' type='text' />
        </div>

        <div className='column'>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' />
        </div>

        <div className='column'>
          <label htmlFor='number'>Phone Number</label>
          <input id='number' type='number' />
        </div>
        <div id='button1'>
          <button type="submit" onClick={this.handle}> Submit</button>
        </div>
      </form>
    </div>)
  }
}

export default GeneralInfo;