import React, { Component } from 'react'

 class LogIn extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           email:'',
           password:''
        }
      }

  
       changehandler=(e)=>{
          this.setState({[e.target.name]:e.target.value})
      }
       passhandler=(e)=>{
          this.setState({[e.target.name]:e.target.value})
          
  
  
  
      }
  
  
      submithandler=(e)=>{
          e.preventDefault()
          alert('your logIn is succesfully');
      }
  render() {
    

         

        const{emailId,password}=this.state
        return (
            <>
                <form onSubmit={this.submithandler} >
                    <h3 className='log mt-4'>Log In</h3>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={emailId} onChange={this.changehandler} required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" name='password' value={password} onChange={this.passhandler} required />
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>

                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    <br/>
                </form>

            </>
        )
  }
    
}
export default LogIn
