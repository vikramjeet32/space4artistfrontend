import React from 'react';
import Image from 'next/image';

const ArtworkCard = () => {
    return (
        <div className="max-w-5xl mx-auto my-12 bg-white border border-gray-200 rounded-lg shadow-lg flex overflow-hidden">
            {/* Artwork Section */}
            <div className="w-2/3 relative">
                <div className="relative w-full h-[700px]"> {/* Increased height */}
                    <Image
                        src="/assets/images/Bk/painting1.jpg"
                        alt="Artwork"
                        layout="fill"
                        objectFit="cover"
                        quality={85} // Adjust as needed
                        priority // If this image is above the fold
                    />
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 text-base rounded">
                    First prize from top 10
                </div>
            </div>

            {/* Artist Section */}
            <div className="w-1/3 bg-gray-100 flex flex-col items-center justify-center p-8"> {/* Adjusted width and padding */}
                <div className="relative w-28 h-28 mb-6"> {/* Increased size for artist image */}
                    <Image
                        src="/assets/images/Bk/women2.jpg" // Ensure this path is correct
                        alt="Artist"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        quality={85}
                    />
                </div>
                <div className="text-xl font-semibold text-gray-800">Larry Lawson</div>
                <div className="text-base text-gray-600 mt-2">Award-Winning Artist</div>
            </div>
        </div>
    );
};

export default ArtworkCard;

