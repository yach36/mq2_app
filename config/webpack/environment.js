const { environment } = require('@rails/webpacker');

const webpack = require('webpack');
const dotenv = require('dotenv');

/* jsにおいて環境変数envを有効化 */
const dotenvFiles = [
  '.env'
];
dotenvFiles.forEach((dotenvFile) => {
  dotenv.config({ path: dotenvFile, silent: true });
});

environment.plugins.prepend('Environment',
  new webpack.EnvironmentPlugin(
    JSON.parse(JSON.stringify(process.env))
  )
);

/* jQueryを有効化 */
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
}));

module.exports = environment
