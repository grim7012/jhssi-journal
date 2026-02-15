import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: "export",
  // uncomment befor npm run build
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
