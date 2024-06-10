/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    underMaintenance:
      process.env.APPSETTING_UNDER_MAINTENANCE || process.env.UNDER_MAINTENANCE,
    gaTrackingId:
      process.env.APPSETTING_GA_TRACKING_ID || process.env.GA_TRACKING_ID,
    getProfileApi:
      process.env.APPSETTING_GET_PROFILE_URL || process.env.GET_PROFILE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lonixsiteresources.blob.core.windows.net", // Allow any subdomain of example.com
        port: "",
        pathname: "/images/**", // Allow any path under /images/
      },
    ],
  },
};

export default nextConfig;
