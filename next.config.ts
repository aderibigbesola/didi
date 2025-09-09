import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  assetPrefix: "",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // Optional: Use this if you're hosting images statically
  },
};
export default nextConfig;
