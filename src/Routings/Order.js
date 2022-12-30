import React from 'react'
import { useState } from 'react';

export const Order = () => {
    const [passwordErr, setpassErr] = useState(false);

    const submithandler = (e) => {
        e.preventDefault()
        alert("Your Order Is Placed")

    }

    const passhandler = (e) => {
        let password = e.target.value;
        if (password.length < 8) {
            setpassErr(true)
        }
        else {
            setpassErr(false)
        }
    }
    return (
        <>
                    <div  className='row col-12  d-flex justify-content-center '  >
                <div className='col col-sm-8 col-md-6 col-lg-8 justify-content-center mt-4' id='r2'>
            
            <form onSubmit={submithandler} >
                <h3 className='log mt-4'>Order Now</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <label htmlFor="inputPassword5" className="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" name='password' onChange={passhandler} required />
                {passwordErr ? <span className='text-danger'>password must be 8 digit</span> : " "}
                <br/>

                <select class="form-select" aria-label="Default select example " required>
                    <option selected>select Size</option>
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">L</option>
                    <option value="3">XL</option>
                    <option value="3">XXL</option>

                </select>
                <br/>
                <select class="form-select" aria-label="Default select example" required>
                    <option selected>select Item</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <br/>

                <button type="submit" className="btn btn-primary mb-3">Submit</button>
                <br />
            </form>
            </div>
            </div>

        </>

    )
}
export default Order



























   // import React, { Component } from 'react'

// class Order extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             email: '',
//             password: '',
//             select: ''
//         }
//     }


//     changehandler = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//     }
//     passhandler = (e) => {
//         this.setState({ [e.target.name]: e.target.value })




//     }


//     submithandler = (e) => {
//         e.preventDefault()
//         alert('your logIn is succesfully');
//     }
//     render() {
//         const { emailId, password } = this.state
//         return (
//             <>

//                 <form onSubmit={this.submithandler} >
//                     <h3 className='log mt-4'>Order Now</h3>
//                     <div className="mb-3">
//                         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={emailId} onChange={this.changehandler} required />
//                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                     </div>
//                     <label htmlFor="inputPassword5" className="form-label">Password</label>
//                     <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" name='password' value={password} onChange={this.passhandler} required />
//                     <div id="passwordHelpBlock" className="form-text">
//                         Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
//                     </div>

//                     <select class="form-select" aria-label="Default select example">
//                         <option selected>select Size</option>
//                         <option value="1">S</option>
//                         <option value="2">M</option>
//                         <option value="3">L</option>
//                         <option value="3">XL</option>
//                         <option value="3">XXL</option>

//                     </select>
//                     <select class="form-select" aria-label="Default select example">
//                         <option selected>select Item</option>
//                         <option value="1">One</option>
//                         <option value="2">Two</option>
//                         <option value="3">Three</option>
//                     </select>

//                     <button type="submit" className="btn btn-primary mb-3">Submit</button>
//                     <br />
//                 </form>

//             </>
//         )
//     }
// }

// export default Order