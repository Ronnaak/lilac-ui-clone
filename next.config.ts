import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        //hostname: 'drive.google.com',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Allows any path under this hostname
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
