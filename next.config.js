const path = require('path');
const withLess = require('@zeit/next-less');

/* Without CSS Modules, with PostCSS */
module.exports = withLess({
  webpack(config, options) {
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.resolve.alias['functions'] = path.join(__dirname, 'functions');
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    return config;
  }
});

/* With CSS Modules */
// module.exports = withLess({ cssModules: true })

/* With additional configuration on top of CSS Modules */
/*
module.exports = withLess({
  cssModules: true,
  webpack: function (config) {
    return config;
  }
});
*/
