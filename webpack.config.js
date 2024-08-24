// webpack.config.js
module.exports = {
  // Other configurations...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|some_other_dir/, // Exclude node_modules and any other directory
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Other rules...
    ],
  },
  // You can also use the `ignorePlugin` to ignore specific files or patterns
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/, // Example: ignoring locales from moment.js
    }),
  ],
};
