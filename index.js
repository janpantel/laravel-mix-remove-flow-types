const mix = require('laravel-mix');

mix.extend(
  'removeFlowTypes',
  webpackConfig =>
    (webpackConfig.module.rules = [
      ...webpackConfig.module.rules,
      {
        test: /\.js?$/,
        enforce: 'pre',
        use: ['remove-flow-types-loader']
      }
    ])
);
