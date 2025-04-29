import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { postData } from '../../utils/api';
import { MyContext } from '../../App';
import  {useNavigate}  from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


const Register = () => {


    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        password: ""
    })

    const context = useContext(MyContext);
    const history = useNavigate();


    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setFormFields(() => {
            return {
                ...formFields,
                [name]: value
            }
        })
    }

    const validValue = Object.values(formFields).every(el => el)



    const handleSubmit = (e) => {

        e.preventDefault();
        setIsLoading(true);


        if (formFields.name === "") {
            context.openAlertBox("error", "Please enter full name")
            return false
        }
        if (formFields.email === "") {
            context.openAlertBox("error", "Please enter email id")
            return false
        }
        if (formFields.password === "") {
            context.openAlertBox("error", "Please enter password")
            return false
        }


        postData("/api/user/register", formFields).then((response) => {
            console.log(response);

            if (response?.error !== true) {
                setIsLoading(false);
                context.openAlertBox("success", response?.message);
                localStorage.setItem("userEmail",formFields.email)
                setFormFields({
                    name: "",
                    email: "",
                    password: ""
                })
                history("/verify")
            }else{
                context.openAlertBox("error", response?.message);
                setIsLoading(false);
            }

        })
    }

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
                    <form className='w-full !mt-5' onSubmit={handleSubmit} >
                        <div className='form-group w-full !mb-5'>
                            <TextField
                                name='name'
                                type='text'
                                id="name"
                                label="Full Name"
                                value={formFields.name}
                                disabled={isLoading === true ? true : false}
                                variant="outlined"
                                className='w-full'
                                onChange={onChangeInput}

                            />
                        </div>
                        <div className='form-group w-full !mb-5'>
                            <TextField
                                type='email'
                                id="email"
                                name="email"
                                label="Email Id"
                                value={formFields.email}
                                disabled={isLoading === true ? true : false}
                                variant="outlined"
                                className='w-full'
                                onChange={onChangeInput}

                            />
                        </div>
                        <div className='form-group w-full !mb-5 relative'>
                            <TextField
                                type={isPasswordShow === false ? 'password' : 'text'}
                                id="password"
                                name="password"
                                label="Password "
                                value={formFields.password}
                                disabled={isLoading === true ? true : false}
                                variant="outlined"
                                className='w-full'
                                onChange={onChangeInput}

                            />
                            <Button className='!absolute !top-[10px] !right-[10px] z-50 !w-[35px] !h-[35px]
                                  !min-w-[35px] !rounded-full !text-black' onClick={() => setIsPasswordShow(!isPasswordShow)} >

                                {isPasswordShow === false ? <IoEye className='text-[20px] opacity-75' /> :
                                    <IoEyeOff className='text-[20px] opacity-75' />
                                }

                            </Button>
                        </div>

                        <div className='flex items-center w-full !mt-3 !mb-3'>
                            <Button type='submit' disabled={!validValue}
                                className='btn-org btn-lg w-full flex gap-3'>
                                {
                                    isLoading === true ? <CircularProgress color='inherit' />
                                        :
                                        'Register'
                                }
                            </Button>
                        </div>

                        <p className='text-center'> Already have an account?
                            <Link className='link text-[14px] font-[600] text-[#ff5252]' to="/login">
                                Login</Link>
                        </p>

                        <p className='text-center font-[500]'> Or Continue with social account</p>

                        <Button className='flex gap-3 w-full !bg-[#f1f1f1]  !text-black'
                        >
                            <FcGoogle className='text-[24px]' />
                            Login with Google
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Register;
