/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.timbu.cloud"],
  },
};

export default nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/products",
        destination: "https://api.timbu.cloud/products/:path*", // Adjust as needed
      },
    ];
  },
};
