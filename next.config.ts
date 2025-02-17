import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  rewrites: async () => {
    return [
      {
        source: '/r/:path*',
        destination: '/r/:path*.json',
      },
    ]
},
};

export default nextConfig;
