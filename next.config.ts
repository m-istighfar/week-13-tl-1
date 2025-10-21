import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
