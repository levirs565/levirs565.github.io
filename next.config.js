/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/levirs565/**",
      },
    ],
  },
};

module.exports = nextConfig;
