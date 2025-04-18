import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { firebaseApp } from '../../firebase';


// const auth = getAuth(firebaseApp);
// const googleProvider = new GoogleAuthProvider();


const Register = () => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);


//    const authWithGoogle=()=>{
//     signInWithPopup(auth, googleProvider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     console.log(user)
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

//    }
      return (
          <section className='section !py-10'>
              <div className='container'>
                  <div className='card shadow-md w-[500px] !m-auto rounded-md bg-white !p-4 !px-10'>
                      <h3 className='text-center text-[18px] !text-black'> Register with a new account</h3>
                      <form className='w-full !mt-5'>
                          <div className='form-group w-full !mb-5'>
                              <TextField
                                  type='text'
                                  id="name"
                                  label="Full Name"
                                  variant="outlined"
                                  className='w-full'
                              />
                          </div>
                          <div className='form-group w-full !mb-5'>
                              <TextField
                                  type='email'
                                  id="email"
                                  label="Email Id"
                                  variant="outlined"
                                  className='w-full'
                              />
                          </div>
                          <div className='form-group w-full !mb-5 relative'>
                              <TextField
                                  type={isPasswordShow===false ? 'password' : 'text'}
                                  id="password"
                                  label="Password "
                                  variant="outlined"
                                  className='w-full'
                              />
                              <Button className='!absolute !top-[10px] !right-[10px] z-50 !w-[35px] !h-[35px]
                                  !min-w-[35px] !rounded-full !text-black' onClick={()=>setIsPasswordShow(!isPasswordShow)} >
  
                                      {isPasswordShow===false ? <IoEye className='text-[20px] opacity-75' /> :
                                      <IoEyeOff className='text-[20px] opacity-75' />
                                      }
                                  
                              </Button>
                          </div>
  
                          <div className='flex items-center w-full !mt-3 !mb-3'>
                              <Button className='btn-org btn-lg w-full'>Register</Button>
                          </div>
  
                          <p className='text-center'> Already have an account? 
                              <Link className='link text-[14px] font-[600] text-[#ff5252]' to="/login">
                              Login</Link>
                          </p>
  
                          <p className='text-center font-[500]'> Or Continue with social account</p>
  
                          <Button className='flex gap-3 w-full !bg-[#f1f1f1]  !text-black' 
                          >
                              <FcGoogle className='text-[24px]'/>
                          Login with Google
                          </Button>
                      </form>
                  </div>
              </div>
          </section>
      )
}

export default Register;
