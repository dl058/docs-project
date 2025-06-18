import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ This prevents ESLint from blocking your Vercel deploy
  },
};

export default nextConfig;
