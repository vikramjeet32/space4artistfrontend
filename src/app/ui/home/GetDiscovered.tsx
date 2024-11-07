// components/GetDiscovered.tsx
import React from 'react';
import Image from 'next/image';


const GetDiscovered: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-200 to-blue-300">
            <p className="text-4xl font-bold mb-4 text-center">Get Discovered</p>

            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* Chat Bubbles and Image */}
                <div className="flex lg:w-1/2 flex-shrink-0 justify-end">
                    <div className="relative flex flex-col justify-end items-center">
                        {/* Main Circle Image */}
                        <div className="rounded-full overflow-hidden w-[400px] h-[400px] bg-white shadow-lg flex justify-end">
                            <Image
                                src="/assets/images/post/4by3/01.jpg"
                                alt="User Chat Image"
                                width={400}
                                height={400}
                                objectFit="cover"
                            />
                        </div>


                        {/* Chat Bubbles Positioned at the End */}
                        <div className="absolute top-24 -left-28 flex flex-col gap-6 ">

                            <div className="bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2 w-52">
                                <Image src="/assets/images/avatar/12.jpg" alt="avatar" width={32} height={32} className="rounded-full" />
                                <p className="text-sm font-semibold">Happy birthday 🎂</p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2 w-52">
                                <Image src="/assets/images/avatar/10.jpg" alt="avatar" width={32} height={32} className="rounded-full" />
                                <p className="text-sm font-semibold">New connection request 🤘</p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg px-4 py-2 flex items-center gap-2 w-52">
                                <Image src="/assets/images/avatar/09.jpg" alt="avatar" width={32} height={32} className="rounded-full" />
                                <p className="text-sm font-semibold">Congratulations 🎉</p>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Text Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <p className="text-5xl lead leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Enjoy special interactive features such as Live Battles, Interactive Gifts, Happy Moments & Exclusive Posts
                        to help you rise the ranks and grow your audience!
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-5 bg-blue-600 text-white px-6 py-2 mx-auto rounded-lg shadow-lg hover:bg-blue-700"
                    >
                        Let’s start
                    </a>
                </div>

            </div>



        </section>
    );
};

export default GetDiscovered;
