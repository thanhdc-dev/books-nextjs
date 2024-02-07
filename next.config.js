/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
    webpack: (config, {
        webpack }) => {
        config.plugins.push(new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery' }));
        return config;
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
          {
            protocol: 'https',
            hostname: 'salt.tikicdn.com',
          },
        ],
      },
}

module.exports = nextConfig
