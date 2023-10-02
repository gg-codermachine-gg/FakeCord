const { config } = require('process');

/** @type {import('next').NextConfig} **/
const nextConfig = {
 webpack: config => {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],

  })
  config.resolve.fallback = {fs: false, module : false}
  return config
}

 
};

module.exports = nextConfig;
