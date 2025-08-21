import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // Ensures URLs like /projects/ are valid
  basePath: isProd ? "" : "", // Optional, usually leave blank unless hosting under subfolder
  assetPrefix: isProd ? "" : "",

  images: {
    domains: [
      "images.unsplash.com",
      "upload.wikimedia.org",
      "plus.unsplash.com",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
