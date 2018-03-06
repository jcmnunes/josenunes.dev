module.exports = {
  plugins: [
    require('postcss-import')({ /* ...options */ }),
    require('postcss-nested')({ /* ...options */ }),
    require('postcss-cssnext')({ /* ...options */ }),
  ],
};
