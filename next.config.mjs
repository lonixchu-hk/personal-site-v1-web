/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    underMaintenance:
      process.env.APPSETTING_UNDER_MAINTENANCE || process.env.UNDER_MAINTENANCE,
    gaTrackingId:
      process.env.APPSETTING_GA_TRACKING_ID || process.env.GA_TRACKING_ID,
  },
};

export default nextConfig;
