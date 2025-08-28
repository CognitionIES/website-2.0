/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
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
    unoptimized: true, // Required for static export
  },

  webpack(config: {
    module: {
      rules: {
        test: RegExp;
        use: {
          loader: string;
          options: { publicPath: string; outputPath: string; name: string };
        };
      }[];
    };
  }) {
    // Add rule for video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: isProd
            ? "/_next/static/videos/"
            : "/_next/static/videos/",
          outputPath: "static/videos/",
          name: "[name].[hash].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
