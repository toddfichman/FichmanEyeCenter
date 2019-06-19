// const withSass = require('@zeit/next-sass')

// const nextConfig = {

   

//   webpack(config, options) {

//     // config.module.rules.push({
//     //   test: /\.(png|svg|jpg|gif|pdf)$/,
//     //   use: [
//     //     {
//     //       loader: 'file-loader',
//     //       options: {
//     //         name: '[name].[ext]'
//     //       }
//     //     }
//     //   ]
//     // });

    
//     return config
//   }
// }

// module.exports = withSass(nextConfig);
 
const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
      ? require('next/constants')
      : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {target: 'serverless'};
  }

  // ✅ Put the require call here.
  const withSass = require('@zeit/next-sass')
  const withOptimizedImages = require('next-optimized-images');

  return withSass(withOptimizedImages({
    handleImages: ['jpeg', 'png'],
    optimizeImages: true,
  }));
};