'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const ArtGalleryCarousel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string | null>(null);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 640, settings: { slidesToShow: 2 } },
        ],
    };

    const images = [
        "/assets/images/1713290371056.jpg",
        "/assets/images/1713290371236_copy.jpg",
        "/assets/images/1713290371287_copy.jpg",
        "/assets/images/1713290371166_copy.jpg",
        "/assets/images/1713290371201_copy.jpg",
        "/assets/images/1713290371129.jpg",
        "/assets/images/1713290371099_copy.jpg"
    ];

    const openModal = (src: string) => {
        setCurrentImage(src);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage(null);
    };

    return (
        <section className="py-10 bg-cover bg-center bg-[url('/assets/images/Bk/light.jpg')]">
            <h2 className="text-center text-3xl font-bold text-white mb-8">Our Art Gallery</h2>
            <div className="max-w-screen-lg mx-auto">
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="hex-container px-4">
                            <div
                                className="hex mx-auto overflow-hidden shadow-lg cursor-pointer"
                                onClick={() => openModal(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`Art piece ${index + 1}`}
                                    width={400}
                                    height={400}
                                    className="hex-image object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {isModalOpen && currentImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                    <div className="relative flex items-center justify-center">
                        <Image
                            src={currentImage}
                            alt="Full view"
                            width={800}
                            height={800}
                            className="rounded-lg max-h-[80vh] object-contain" // Ensure image is responsive
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-2 z-50"
                            style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                        >
                            <AiOutlineClose size={24} /> {/* Use React Icon */}
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ArtGalleryCarousel;
