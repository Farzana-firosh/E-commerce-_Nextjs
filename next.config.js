/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fakestoreapi.com",
      "storage.googleapis.com" // add any other domains you use
    ],
  },
};

module.exports = nextConfig;