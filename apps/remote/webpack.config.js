const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;
module.exports = {
  entry: './src/index',
  entry: {
    app: {
      import: './src/index',
    },
  },
  cache: false,

  mode: 'development',
  devtool: 'source-map',

  optimization: {
    minimize: false,
  },

  output: {
    publicPath: 'auto',
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json', '.mjs'],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
        options: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: 'file-loader',
      }
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'remote',

      filename: 'remoteEntry.js',
      exposes: {
        // './react': 'react',
        // './react-dom': 'react-dom',
        './Nav': './src/App',
      },
      shared: [
        {
          ...deps,
          'react': {
            singleton: true,
            requiredVersion: deps.react,

          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },

          "@mui/material": {
            singleton: true,
            requiredVersion: deps["@mui/material"],
          }
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
