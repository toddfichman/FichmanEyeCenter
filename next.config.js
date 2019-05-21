const withSass = require('@zeit/next-sass')

const nextConfig = {

   

  webpack(config, options) {

    // config.module.rules.push({
    //   test: /\.(png|svg|jpg|gif|pdf)$/,
    //   use: [
    //     {
    //       loader: 'file-loader',
    //       options: {
    //         name: '[name].[ext]'
    //       }
    //     }
    //   ]
    // });

    
    return config
  }
}

module.exports = withSass(nextConfig);
 