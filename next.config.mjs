/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    underMaintenance: process.env.UNDER_MAINTENANCE,
  },
};

export default nextConfig;
