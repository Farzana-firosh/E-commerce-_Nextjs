'use client'
import React, { useEffect, useState } from 'react'

const slides = [
    {
        img: '/images/bannerimg1.jpg',
        title: 'Discover the Latest Trends',
        desc: 'Shop the newest arrivals and exclusive deals at ShopEase.',
    },
    {
        img: '/images/bannerimg2.jpg',
        title: 'Upgrade Your Style',
        desc: 'Find your perfect look with our curated collections.',
    },
    {
        img: '/images/bannerimg3.jpg',
        title: 'Unbeatable Prices',
        desc: 'Enjoy amazing discounts on top brands and essentials.',
    },
]

export default function HomePage() {
    const [current, setCurrent] = useState(0)

    // Change slide every 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearTimeout(timer)
    }, [current])

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % slides.length)
    }

    return (
        <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
            {slides.map((slide, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ${
                        idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    <div className="w-full relative h-[750px] md:h-[1300px] overflow-hidden shadow-lg">
                        <img
                            src={slide.img}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                            <button
                                onClick={handlePrev}
                                className="bg-white/70 hover:bg-[#ffb347] text-[#1a2980] rounded-full p-3 shadow transition"
                                aria-label="Previous"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-white/70 hover:bg-[#ffb347] text-[#1a2980] rounded-full p-3 shadow transition"
                                aria-label="Next"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full border-2 border-[#ffb347] transition-all ${
                            current === idx ? 'bg-[#ffb347]' : 'bg-white'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}


