/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.myanimelist.net"],
  },
  experimental: { appDocumentPreloading: true },
  compiler: { styledComponents: true },
};
module.exports = nextConfig;
