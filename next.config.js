/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  distDir: 'dist',
  images: {
    unoptimized: true,
    domains: [
      "dzzoo94ozikw5.cloudfront.net",
      "lh3.googleusercontent.com",
      "platform-lookaside.fbsbx.com",
    ],
  },
};

module.exports = nextConfig;
