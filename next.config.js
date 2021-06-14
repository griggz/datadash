require("dotenv").config();

module.exports = {
  env: {
    ENV: process.env.ENV,
    URL_ACCESS_TOKEN: process.env.URL_ACCESS_TOKEN,
  },
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
