const path = require('path');

module.exports = {
  entry: ['./app.jsx'],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
        ],
      }
    ]
  },
};
