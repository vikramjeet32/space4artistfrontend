// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Header: React.FC = () => {
    return (
        <header className="bg-black">
            {/* Navbar START */}
            <div className="bg-cover" style={{ backgroundImage: "url('/assets/images/Bk/artprint.jpg')" }}>
                <div className="container mx-auto px-4 lg:px-8">
                    <nav className="navbar navbar-expand-lg">
                        <div className="flex items-center flex-wrap lg:flex-nowrap">
                            {/* Logo START */}
                            <Image
                                src="/assets/images/ARTLINK.svg"
                                alt="Logo"
                                width={100}
                                height={100}
                                className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] transform rotate-90 ml-2"
                            />

                            <a className="navbar-brand" href="index.html"></a>
                            {/* Logo END */}

                            {/* Buttons START */}
                            <div className="flex space-x-2 lg:space-x-4 ml-auto mt-4 lg:mt-0">
                                <a
                                    className="px-3 py-2 lg:px-4 lg:py-2 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg hover:text-orange-600 transition duration-300 glow-button text-sm lg:text-base"
                                    href="#"
                                >
                                    Sign in as Guest
                                </a>
                                <Link
                                    className="px-3 py-2 lg:px-4 lg:py-2 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg hover:text-orange-600 transition duration-300 glow-button text-sm lg:text-base"
                                    href="/signin"
                                >
                                    Sign in
                                </Link>
                                <Link
                                    className="px-3 py-2 lg:px-4 lg:py-2 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg hover:text-orange-600 transition duration-300 glow-button text-sm lg:text-base"
                                    href="/signup"
                                >
                                    Sign up
                                </Link>
                            </div>
                            {/* Buttons END */}
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar END */}
        </header>


    );
};

export default Header;
