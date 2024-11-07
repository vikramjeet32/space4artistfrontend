// components/MainContent.tsx
import React from 'react';
// import Image from 'next/image';
import GetDiscovered from './GetDiscovered';
import Header from './Header';
import ArtworkCard from './ArtworkCard';
import DiscoveredArtist from './DiscoveredArtist';
import LiveCastOfArt from './LiveCastOfArt';
import Footer from './Footer';

import ArtGalleryCarousel from './ArtGalleryCarousel';



const MainContent: React.FC = () => {
    return (
        <main className=''>
            <Header />
            <section className="pb-0">
                <div className="px-4 lg:px-8">
                    <div className="billBoard p-5 lg:mr-6 bg-cover bg-[url('/assets/images/Bk/artprint.jpg')]">
                        <div className="text-center relative z-10 bg-black bg-opacity-70 p-6 lg:p-9 mx-4 lg:mx-8 bg-[url('/assets/images/Bk/flower2.jpg')]">
                            <h1 className="text-3xl lg:text-6xl text-white font-Pacifico">Welcome to ArtLink</h1>
                            <h2 className="text-2xl lg:text-4xl text-white font-Pacifico">Space4Artist</h2>
                            <p className="lead mt-3 lg:mt-5 text-xl lg:text-2xl text-yellow-300 font-Sacramento animate-blink">
                                Want to explore more...!
                            </p>
                            <a
                                className="inline-block mt-4 bg-blue-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                                href="#"
                                aria-label="Sign up for free"
                            >
                                Sign up for free
                            </a>
                            <div className="mt-2">
                                <div className="flex justify-center gap-1">
                                    <i className="fa-solid fa-star text-yellow-500 text-lg lg:text-xl"></i>
                                    <i className="fa-solid fa-star text-yellow-500 text-lg lg:text-xl"></i>
                                    <i className="fa-solid fa-star text-yellow-500 text-lg lg:text-xl"></i>
                                    <i className="fa-solid fa-star text-yellow-500 text-lg lg:text-xl"></i>
                                    <i className="fa-solid fa-star-half-stroke text-yellow-500 text-lg lg:text-xl"></i>
                                </div>
                                <p className="italic text-white mt-2">&quot;I can&apos;t believe it&apos;s free!&quot;</p>
                            </div>
                        </div>

                        <div className="container mx-auto mt-10 bg-black p-4 lg:p-5 rounded-lg shadow-lg">
                            <h1 className="text-center text-white text-2xl lg:text-3xl font-semibold">
                                Congratulations! 🎉 to our top Art and Artist Of the week
                            </h1>
                        </div>

                        <ArtworkCard />
                    </div>
                </div>
            </section>


            {/* Get Discovered Section */}
            <GetDiscovered />

            <div className='bg-gradient-to-b from-[#e3f2fd] via-[#e5f1fa] to-[#eceaea]'>


                <DiscoveredArtist />
                <LiveCastOfArt />
            </div>

            {/* Art Gallery Section */}
            {/* <section className="py-10 bg-[url('/assets/images/Bk/light.jpg')]">
                <h2 className="text-center text-3xl font-bold text-white">Our Art Gallery</h2>
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-8">
                    <div className="hex overflow-hidden rounded-full shadow-lg">
                        <div className="hex overflow-hidden rounded-full shadow-lg">
                            <Image
                                src="/assets/images/1713290371056.jpg"
                                alt="Art piece"
                                width={100}
                                height={100}
                                layout="responsive"
                            />
                        </div>

                    </div>

                </div>
            </section> */}
            <ArtGalleryCarousel />

            {/* Art Mart Section */}
            <section className="artMart bg-[url('/assets/images/Bk/shopping.jpg')] h-80 flex flex-col items-center justify-center">
                <h1 className="text-5xl text-center text-white font-Pacifico mb-4">Art Mart</h1>
                <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg shadow-md hover:bg-gray-200 hover:text-gray-900 transition duration-300">
                    Know More
                </button>

            </section>

            {/* Popup */}
            <div className="popup fixed inset-0  items-center justify-center bg-black bg-opacity-50 hidden">
                <div className="popup-content bg-white p-10 rounded-md text-center shadow-lg relative bg-[url('/assets/images/Bk/joyful_white.gif')] bg-left bg-contain bg-no-repeat h-80">
                    <button className="close text-gray-400 text-2xl absolute top-4 right-4">&times;</button>
                    <div className="mt-20">
                        <h5 className="text-2xl">Art Mart is coming soon...</h5>
                        <p>Please stay with us... Thank you!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default MainContent;
