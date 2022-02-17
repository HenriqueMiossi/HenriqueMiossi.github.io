const path = require('path')
const withOptimizedImages = require('next-optimized-images');
module.exports = withOptimizedImages({
  /* config for next-optimized-images */
  
  images: {
    loader: 'custom',
    disableStaticImages: true
  },

  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'src/assets/scss')],
  // },

});
