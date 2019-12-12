Laravel Mix Remove Flow Types
=============================

A laravel-mix wrapper for the [remove-flow-types-loader](https://github.com/conorhastings/remove-flow-types-loader) Webpack loader.

Use this extension if you want to use [Flow](https://flowtype.org) type annotations in your Javascript files.

## Installation

```bash
# npm
npm install laravel-mix-remove-flow-types --save-dev

# yarn
yarn add laravel-mix-remove-flow-types --dev
```

## Usage

The loader is configured to match all `.js` and `.jsx` files, there is no need to specify files that contain
flow type definitions. Just call the 

```javascript
const mix = require('laravel-mix');
require('laravel-mix-remove-flow-types');

mix.removeFlowTypes().js('resources/js/app.js', 'public/js');

```