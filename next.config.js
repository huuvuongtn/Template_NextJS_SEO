require('dotenv').config();

module.exports = {
  env: {
    PORT: 4000, // Replace with your desired port number
  },
  webpack: (config) => {
    // Add your custom webpack configuration here
    return config;
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    secretKey: process.env.SECRET_KEY,
  },
};
