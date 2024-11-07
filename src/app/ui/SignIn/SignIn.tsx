// SignIn.tsx
'use client'
import React, { useState } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './SignIn.component.scss';
import Image from 'next/image';
import Link from 'next/link';


const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-400 to-purple-500">
            {/* Header */}
            <div className="flex flex-col items-center justify-center pt-6 pb-6">
                <h1 className="text-4xl font-bold text-white mb-4">Welcome back!</h1>
                <Image
                    src="/assets/images/login.svg"
                    alt="Login"
                    width={500}  // Specify an appropriate width
                    height={300} // Specify an appropriate height
                    className="w-1/5 max-h-40"
                />

            </div>

            {/* Sign-in Card */}
            <div className="flex justify-center mb-3">
                <div className="bg-white bg-opacity-90 max-w-md w-full p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center mb-3">Sign in</h2>
                    <p className="text-center text-gray-700">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="text-indigo-600 hover:underline">
                            Click here to sign up
                        </Link>
                    </p>

                    {/* Form */}
                    <form className="mt-6">
                        {/* Email */}
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full p-3 border-b border-gray-400 focus:border-indigo-500 focus:ring-0 outline-none"
                            />
                            <small className="text-red-500">Email is required.</small>
                            <small className="text-red-500">Please enter a valid email.</small>
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter new password"
                                    className="w-full p-3 border-b border-gray-400 focus:border-indigo-500 focus:ring-0 outline-none"
                                />
                                <span
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            <small className="text-red-500">Password is required.</small>
                        </div>

                        {/* Forgot password */}
                        <div className="flex justify-end mb-4">
                            <a href="../forgot-password" className="text-indigo-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-200"
                        >
                            LOGIN
                        </button>

                        {/* Divider */}
                        <div className="flex items-center my-6">
                            <hr className="flex-grow border-gray-300" />
                            <span className="px-3 text-gray-500">Or</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        {/* Social Login Icons */}
                        <div className="flex justify-center space-x-4">
                            <FaFacebookSquare size={30} className="text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                            <FaTwitterSquare size={30} className="text-blue-400 cursor-pointer hover:scale-110 transition-transform" />
                            <FaLinkedin size={30} className="text-blue-700 cursor-pointer hover:scale-110 transition-transform" />
                            <FaYoutubeSquare size={30} className="text-red-600 cursor-pointer hover:scale-110 transition-transform" />
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-auto bg-white py-6">
                <div className="container mx-auto text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                        <a href="#terms" className="text-gray-700 font-semibold hover:underline">Terms</a>
                        <a href="#privacy" className="text-gray-700 font-semibold hover:underline">Privacy</a>
                        <a href="#cookies" className="text-gray-700 font-semibold hover:underline">Cookies</a>
                    </div>
                    <div className="flex justify-center space-x-6">
                        <a href="#facebook" className="text-gray-500 hover:text-gray-700">
                            <FaFacebookSquare size={24} />
                        </a>
                        <a href="#twitter" className="text-gray-500 hover:text-gray-700">
                            <FaTwitterSquare size={24} />
                        </a>
                        <a href="#linkedin" className="text-gray-500 hover:text-gray-700">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="#youtube" className="text-gray-500 hover:text-gray-700">
                            <FaYoutubeSquare size={24} />
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default SignIn;
