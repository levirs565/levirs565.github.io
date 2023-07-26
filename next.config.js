/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/levirs565/**",
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
