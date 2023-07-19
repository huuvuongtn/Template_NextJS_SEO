require('dotenv').config();



module.exports = {
  env: {
    BASE_URL:process.env.BASE_URL,
    SECRET_KEY:process.env.SECRET_KEY,
  },
  webpack: (config) => {
    // Add your custom webpack configuration here
    return config;
  },
  publicRuntimeConfig: {
    apiUrl: process.env.BASE_URL,
    secretKey: process.env.SECRET_KEY,
  },
};
