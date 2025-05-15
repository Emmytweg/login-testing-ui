import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['http://172.20.10.5', 'http://localhost:3000/'], // or whatever IP is shown
};

export default nextConfig;
