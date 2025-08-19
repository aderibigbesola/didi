import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <=== enables static exports
  basePath: "/didi",
  assetPrefix: "/didi/",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
