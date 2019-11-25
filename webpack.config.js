const path = require('path');

module.exports = {
    entry: { 
      filterBuilder: './src/filterBuilder.ts'    
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
    output: {
        publicPath: path.resolve(__dirname, "public"),
        path: path.resolve(__dirname, "public"),
        filename: '[name].bundle.js',

    },
    mode: "development"
}; 
