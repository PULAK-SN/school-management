import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  // This ensures the env vars are always passed through even during static builds.
  env: {
    NEXT_PUBLIC_IDENTIFIER: process.env.NEXT_PUBLIC_IDENTIFIER,
    NEXT_PUBLIC_PASSWORD: process.env.NEXT_PUBLIC_PASSWORD,
  },
};

export default nextConfig;
