import React from "react";
import Image from 'next/image';

function LiveCastOfArt() {
    return (
        <div className="flex flex-col md:flex-row items-center  px-10 py-16">
            {/* Left Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left md:pr-8">
                <h2 className="text-4xl font-bold text-gray-800  w-1/2 ml-auto" >Live Cast of Art</h2>

                <div className="flex items-end space-x-4 mt-4 justify-center md:justify-end w-1/2 ml-auto">
                    <div className="relative w-10 h-10 mb-auto">
                        <Image
                            src="/assets/images/elements/04.svg"
                            alt="Meet creators icon"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Meet creators</h3>
                        <p className="text-gray-600">
                            Live chat with the Artist. Learn & grow with new Art and craft.
                        </p>
                    </div>
                </div>

                <div className="flex items-end space-x-4 mt-4 justify-center md:justify-end w-1/2 ml-auto">
                    <div className="relative w-10 h-10  mb-auto" >
                        <Image
                            src="/assets/images/elements/10.svg"
                            alt="Support artists icon"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Support artists</h3>
                        <p className="text-gray-600">
                            With the creative community and positive response, artists get motivated for new and unique Art.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Image Content */}
            <div className="flex  w-full md:w-1/2 mt-10 md:mt-0 md:pl-8">
                <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-lg">
                    <Image
                        src="/assets/images/post/4by3/02.jpg"
                        alt="Video call with artists"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>

    );
}

export default LiveCastOfArt;
