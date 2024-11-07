import React from 'react';
import Image from 'next/image';

interface ArtistCardProps {
    imageSrc: string;
    name: string;
    role: string;
    followers: number;
    likes: number;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ imageSrc, name, role, followers, likes }) => {
    return (
        <div className="relative w-64 bg-gray-100 border-4 border-blue-300 rounded-lg shadow-lg transition-transform duration-300 transform hover:border-blue-500 overflow-hidden group">


            <div className="relative w-32 h-32 mx-auto mb-4 mt-4 group">
                <div className="absolute inset-0 rounded-full bg-blue-500 transition-transform duration-700 ease-in-out group-hover:scale-110"></div>
                <div className="absolute inset-1 rounded-full bg-white transition-transform duration-700 ease-in-out group-hover:scale-95"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-700 ease-in-out group-hover:scale-75">
                    <Image
                        src={imageSrc}
                        alt={`${name}'s photo`}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>




            <div className="flex justify-center">
                <button className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 mt-2 rounded">
                    Follow
                </button>
            </div>

            {/* Name and Role */}
            <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <h4 className="text-sm text-gray-600">{role}</h4>
            </div>

            {/* Social Stats - placed at the bottom */}
            <div className="w-full bg-blue-500 text-white text-center py-2 opacity-0 transform translate-y-full transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <p>
                    <b>Followers</b> {followers} | <b>Likes</b> {likes}
                </p>
            </div>
        </div>

    );
};

const DiscoveredArtist: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-6 justify-center items-center pt-10">
            <h2 className="w-full text-center text-2xl font-bold mb-6">Discovered Artist</h2>

            {/* Artist Cards */}
            <ArtistCard imageSrc="/assets/images/Bk/women2.jpg" name="Michele Miller" role="Pencil Artist" followers={2890} likes={2800} />
            <ArtistCard imageSrc="/assets/images/Bk/women2.jpg" name="Patricia Knott" role="Painting Art Pro" followers={2150} likes={1500} />
            <ArtistCard imageSrc="/assets/images/Bk/women2.jpg" name="Justin Ramos" role="Sketch Artist" followers={3000} likes={2700} />

            {/* Show More Button */}
            <div className="w-60 p-4 bg-white border-4 border-blue-300 rounded-lg shadow-lg flex items-center justify-center">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm">Show More</button>
            </div>
        </div>
    );
};

export default DiscoveredArtist;
