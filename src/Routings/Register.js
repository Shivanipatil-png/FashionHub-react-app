import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export const Register = () => {
    const navigate= useNavigate();
    const [passwordErr, setpassErr] = useState(false);
    const [mobileErr, setmobileErr] = useState(false);


    const Regihandle=(e)=> {
        e.preventDefault()
        
        
    }


    const passwordhandler = (e) => {
        let password = e.target.value;
        if (password.length < 8) {
            setpassErr(true)
        }
        else {
            setpassErr(false)
        }
    }
    const mobilehandler = (e) => {
        let mobile = e.target.value;
        if (mobile.length > 10 || mobile.length < 10) {
            setmobileErr(true)


        }
        else {
            setmobileErr(false)
        }
    }

  return (
    <>
    <div id='r1'> 
                <nav className='bg-dark navbar-dark navbar' id='n1'>
                <div className=" row col-12  d-flex justify-content-center text-white">
                    <h3>Registration</h3>
                </div>
            </nav>
            
             <br />
            <div  className='row col-12  d-flex justify-content-center ' >
                <div className='col col-sm-8 col-md-6 col-lg-8 justify-content-center'>
                    <form onSubmit={Regihandle} id='c1' className='ms-1'>
                        <div className='form-group '>
                            <label className='form_label mt-5' htmlFor=''>Full Name:-</label>
                            <input className='form_input' type='text' placeholder='Your Name...' required />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label className='form_label' htmlFor=''>Email Id:-</label>
                            <input className='form_input' type='email' placeholder='abs123@example.com...' required />
                            
                        </div>
                        <br />


                        <div className='form-group'>
                            <label className='form_label' htmlFor=''>password:-</label>
                            <input className='form_input' type='password' onChange={passwordhandler} placeholder='Your password...' required />
                            {passwordErr ? <span className='text-danger'>password must be 8 digit</span> : " "}
                        </div>
                        <br />
                        <div className='form-group'>
                            <label className='form_label' htmlFor=''>Mobile No:-</label>
                            
                            <input className='form_input' type='number' onChange={mobilehandler} placeholder='Your Mobile...' required />
                            {mobileErr ? <span className='text-danger'>Mobile No should be 10 digit</span> : " "}
                        </div>
                        <br />
                        
                        <div className='footer'>
                        <input type='submit' className='btn btn-success font-weight me-2' onClick={()=>navigate('/home')} /> 
                        
                        </div>
                        <br/>


                    </form>
                    <br/>
                </div>
                <br/>
            </div>
            </div>
    
    
    </>
  )
}
