const path = require('path');
module.exports = {
  "mode": "none",
  "entry": "./src/scripts.js",
  "output": {
    "path": __dirname + '/dist',
    "filename": "bundle.js",
    sourceMapFilename: "bundle.js.map"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  "devtool": "source-map",
  // CSS and file (image) loaders
  "module": {
    "rules": [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      }
    ]
  }
};