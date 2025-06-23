'use client';

import { useRouter } from 'next/navigation';

const GotoCartButton = () => {
  const router = useRouter();

  return (
    <button
      className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
      onClick={() => router.push('/cart')}
    >
      Go to Cart
    </button>
  );
};

export default GotoCartButton;