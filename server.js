const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const DIST_DIR = path.join(__dirname, 'build');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const config = require('./config/webpack.dev.js');

const compiler = webpack(config);

if (process.env.NODE_ENV === 'development') {
  // Tell express to use the webpack-dev-middleware and use the webpack.config.js
  // configuration file as a base.
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));
} else {
  app.use(express.static(DIST_DIR));
  app.get('*', (req, res) => res.sendFile(HTML_FILE));
}

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log('App listening on port 3000!\n');
});
