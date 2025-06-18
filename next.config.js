/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ This is what you're missing or misconfigured
  },
};

module.exports = nextConfig;
