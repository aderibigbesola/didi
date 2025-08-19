import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/didi" : "",
  assetPrefix: isProd ? "/didi" : "",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true, // Optional: Use this if you're hosting images statically
  },
};
export default nextConfig;
