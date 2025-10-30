import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove basePath and assetPrefix for subdomain deployment
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
