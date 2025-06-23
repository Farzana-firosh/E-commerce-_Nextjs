'use client';
import React from 'react';
import Image from 'next/image';

export default function OfferBanner() {
  return (
    <div className="w-full overflow-hidden my-10 shadow-lg">
      <Image
        src='/images/bannerimg4.jpg'
        alt="Mega Offer Banner"
        width={1200}
        height={70}
        className="w-full h-[700px] object-cover"
      />
    </div>
  );
}