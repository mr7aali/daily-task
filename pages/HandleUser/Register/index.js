import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import Footer from "../../../Components/Footer/Footer";
import DrawerAppBar from "../../../Components/Header/Header";
import GoogleIcon from '@mui/icons-material/Google';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { useContext } from "react";
import { AuthContext } from "../../../Components/contexts/AuthProvider";
const Register = () => {


    const { createUser,singWithGoogle } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = data => {
        createUser(data.Email, data.Password)
        .then(result=>{
            const user= result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    };

    const googleSingIN=()=>{
        singWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(err => console.error(err));
    }
    return (
        <Box>
            <DrawerAppBar></DrawerAppBar>
            <Box className="relative"
                sx={{

                    // height:'100vh'
                }}
            >
                <img
                    src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="absolute inset-0 object-cover w-full h-full"
                    alt=""
                />
                <Box className="relative bg-gray-900 bg-opacity-75">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    The quick, brown fox <br className="hidden md:block" />
                                    jumps over a{' '}
                                    <span className="text-teal-accent-400">lazy dog</span>
                                </h2>
                                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                                    quae.
                                </p>
                                <a
                                    href="/"
                                    aria-label=""
                                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                                >
                                    Learn more
                                    <svg
                                        className="inline-block w-3 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <Typography className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Register for add Task
                                    </Typography>


                                    <form onSubmit={handleSubmit(handleRegister)}>
                                        <div className="mb-12 sm:mb-12">
                                            <TextField type='text' {...register("Name")} fullWidth label="Full Name" placeholder="Type your name" id="fullWidth" />
                                        </div>
                                        <div className="mb-12 sm:mb-12">
                                            <TextField type='email' {...register("Email")} fullWidth label="Email" placeholder="Type your email" id="fullWidth" />
                                        </div>



                                        <div className="mb-5 sm:mb-5">
                                            <TextField type='password' {...register("Password")} fullWidth label="Password" placeholder="Type your password" id="fullWidth" />

                                        </div>
                                        <div className="mb-12">
                                            <h1 className="text-md">If you already have an account, just <Link style={{ cursor: 'pointer' }} href='/HandleUser/Login' className="text-[#1976D2] font-bold">Login</Link> .</h1>
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <Button type="submit" variant="outlined" endIcon={<HowToRegIcon />} fullWidth>Register</Button>
                                        </div>
                                        <Divider orientation='horizontal' flexItem>
                                            OR
                                        </Divider>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <Button onClick={googleSingIN} variant="contained" style={{ backgroundColor: '#34A853' }} endIcon={<GoogleIcon />} fullWidth>Google</Button>
                                        </div>


                                        <p className="text-xs text-gray-600 sm:text-sm">
                                            We respect your privacy. Unsubscribe at any time.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
            <Footer></Footer>
        </Box>
    );
};

export default Register;