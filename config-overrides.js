const path = require('path');

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.mjs$/,
    enforce: 'pre',
    use: ['source-map-loader'],
    exclude: /node_modules\/@react-aria\/ssr/,
  });
  return config;
};
