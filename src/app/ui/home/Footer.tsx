import React from 'react';
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className="pt-5 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/images/Bk/artprint.jpg")' }}>
            <div className="container mx-auto py-8 bg-[radial-gradient(circle,_rgba(174,238,208,1)_4%,_rgba(149,148,233,1)_67%)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex justify-center sm:justify-start">
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/images/ARTLINK.svg"
                                alt="ARTLINK logo"
                                layout="fill"
                                objectFit="contain"
                                className="max-w-[85%] max-h-[85%] transform rotate-90"
                            />
                        </div>
                    </div>
                    <div>
                        <h5 className="mb-4 text-black">Download</h5>
                        <ul className="space-y-2">
                            {/* Uncomment as needed */}
                            {/* <li><a href="landing.html#" className="text-black"><i className="bi bi-globe pe-2"></i>Web Browser</a></li>
              <li><a href="landing.html#" className="text-black"><i className="bi bi-windows pe-2"></i>Windows</a></li>
              <li><a href="landing.html#" className="text-black"><i className="bi bi-apple pe-2"></i>macOS</a></li> */}
                            <li><a href="landing.html#" className="text-black"><i className="bi bi-phone pe-2"></i>Android</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="mb-4 text-black">About</h5>
                        <ul className="space-y-2">
                            <li><a href="landing.html#" className="text-black">About social</a></li>
                            <li><a href="landing.html#" className="text-black">Security</a></li>
                            <li><a href="landing.html#" className="text-black">Customer Support</a></li>
                            <li><a href="landing.html#" className="text-black">Partners</a></li>
                            <li><a href="landing.html#" className="text-black">Careers - <b>Join Us!</b></a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="mb-4 text-black">Resources</h5>
                        <ul className="space-y-2">
                            <li><a href="landing.html#" className="text-black">Join</a></li>
                            <li><a href="landing.html#" className="text-black">Help Center</a></li>
                            <li><a href="landing.html#" className="text-black">Developers</a></li>
                            <li><a href="landing.html#" className="text-black">Status</a></li>
                            <li><a href="landing.html#" className="text-black">Communities</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="border-t border-gray-300 my-5" />
            <div className="bg-gray-100 py-3">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                    <ul className="flex flex-wrap space-x-4 text-black">
                        <li><a href="landing.html#" className="black">Support</a></li>
                        <li><a href="docs/index.html" target="_blank" className="black">Docs</a></li>
                        <li><a href="landing.html#" className="black">Terms of Use</a></li>
                        <li><a href="landing.html#" className="black">Privacy &amp; terms</a></li>
                    </ul>
                    <p className="text-center lg:text-right text-black mt-4 lg:mt-0">
                        Copyright © 2024 <a href="https://www.ARTLINK SPACE4ARTIST.com" target="_blank" className="text-black">ARTLINK SPACE4ARTIST</a> All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
