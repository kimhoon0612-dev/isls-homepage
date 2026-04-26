import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow all local network IPs to connect to dev server and load JS assets
  // @ts-ignore - this setting is not in the type definitions but works in 15+
  allowedDevOrigins: ["localhost", "192.168.219.102", "192.168.219.103", "192.168.0.0/16", "192.168.0.0/24"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.isls-liversurgeon.org",
      },
    ],
  },
};

export default nextConfig;
