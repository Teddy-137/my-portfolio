/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'medihelp-frontend-ntx5.vercel.app',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;
