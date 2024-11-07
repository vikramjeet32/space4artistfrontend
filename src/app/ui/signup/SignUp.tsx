// SignIn.tsx
'use client'
import React, { useState } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';
import Select from "react-select";
import Link from 'next/link';


const SignUp = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    interface ArtTypeOption {
        value: string;
        label: string;
    }

    // Form state
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [selectedArtType, setSelectedArtType] = useState<ArtTypeOption | null>(null);
    const [customArtType, setCustomArtType] = useState("");

    // Validation state
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        artType: ''
    });

    const artTypeOptions: ArtTypeOption[] = [
        { value: "painting", label: "Painting" },
        { value: "sculpture", label: "Sculpture" },
        { value: "photography", label: "Photography" },
        { value: "digital_art", label: "Digital Art" },
        { value: "drawing", label: "Drawing" },
        { value: "other", label: "Other" },
    ];

    const handleArtTypeChange = (selectedOption: ArtTypeOption | null) => {
        setSelectedArtType(selectedOption);
        if (selectedOption === null || selectedOption.value !== "other") {
            setCustomArtType("");
        }
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation check
        const formErrors = {
            firstName: firstName ? '' : 'First Name is required.',
            lastName: lastName ? '' : 'Last Name is required.',
            email: email ? '' : 'Email is required.',
            password: password ? '' : 'Password is required.',
            confirmPassword: confirmPassword ? '' : 'Confirm Password is required.',
            artType: selectedArtType ? '' : 'Art Type is required.'
        };

        // Special validation for custom art type if "Other" is selected
        if (selectedArtType?.value === "other" && !customArtType) {
            formErrors.artType = "Please enter your custom art type.";
        }

        // Check if passwords match
        if (password && confirmPassword && password !== confirmPassword) {
            formErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(formErrors);

        // Check if there are any errors
        const hasErrors = Object.values(formErrors).some(error => error);
        if (!hasErrors) {
            // Gather form data
            const formData = {
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                artType: selectedArtType?.value === "other" ? customArtType : selectedArtType?.label
            };

            // Log form data to the console
            console.log("Form Data:", formData);
        }
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
                    <h2 className="text-2xl font-semibold text-center mb-3">Sign Up</h2>
                    <p className="text-center text-gray-700">
                        Don&apos;t have an account?{' '}
                        <Link href="/signin" className="text-indigo-600 hover:underline">
                            Click here to sign In
                        </Link>
                    </p>

                    {/* Form */}
                    <form className="mt-6" onSubmit={handleSignUp}>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full p-3 border-b border-gray-400 focus:border-indigo-500 focus:ring-0 outline-none"
                            />
                            {errors.firstName && <small className="text-red-500">{errors.firstName}</small>}
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full p-3 border-b border-gray-400 focus:border-indigo-500 focus:ring-0 outline-none"
                            />
                            {errors.lastName && <small className="text-red-500">{errors.lastName}</small>}
                        </div>

                        <div className="mb-4">
                            <Select
                                options={artTypeOptions}
                                value={selectedArtType}
                                onChange={handleArtTypeChange}
                                placeholder="Select Art Type"
                                className="w-full"
                            />
                            {selectedArtType?.value === "other" && (
                                <input
                                    type="text"
                                    placeholder="Enter your custom art type"
                                    value={customArtType}
                                    onChange={(e) => setCustomArtType(e.target.value)}
                                    className="w-full p-3 mt-2 border-b border-gray-400 focus:border-indigo-500 focus:ring-0 outline-none"
                                />
                            )}
                            {errors.artType && <small className="text-red-500">{errors.artType}</small>}
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border-b border-gray-400 focus:border-indigo-500 focus:ring-0 outline-none"
                            />
                            {errors.email && <small className="text-red-500">{errors.email}</small>}
                        </div>

                        <div className="mb-4">
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Enter new password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 border-b border-gray-400 focus:border-indigo-500 focus:ring-0 outline-none"
                                />
                                <span
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            {errors.password && <small className="text-red-500">{errors.password}</small>}
                        </div>

                        <div className="mb-4">
                            <div className="relative">
                                <input
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    placeholder="Confirm password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full p-3 border-b border-gray-400 focus:border-indigo-500 focus:ring-0 outline-none"
                                />
                                <span
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                                    onClick={toggleConfirmPasswordVisibility}
                                >
                                    {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                            {errors.confirmPassword && <small className="text-red-500">{errors.confirmPassword}</small>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-200"
                        >
                            SIGN UP
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

export default SignUp;
