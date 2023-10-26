/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.myanimelist.net', 'cdn.discordapp.com', 'lh3.googleusercontent.com'],
  },
  experimental: { appDocumentPreloading: true },
  compiler: { styledComponents: true },
};
module.exports = nextConfig;
