# micro-methods

[![NPM](https://img.shields.io/npm/v/micro-methods.svg)](https://www.npmjs.com/package/micro-methods)
[![Travis](https://img.shields.io/travis/call-a3/micro-methods.svg)](https://travis-ci.com/call-a3/micro-methods)
[![Codecov](https://img.shields.io/codecov/c/github/call-a3/micro-methods.svg)](https://codecov.io/gh/call-a3/micro-methods)
[![Greenkeeper badge](https://badges.greenkeeper.io/call-a3/micro-methods.svg)](https://greenkeeper.io/)
[![David](https://img.shields.io/david/call-a3/micro-methods.svg)](https://david-dm.org/call-a3/micro-methods)
[![David Dev](https://img.shields.io/david/dev/call-a3/micro-methods.svg)](https://david-dm.org/call-a3/micro-methods?type=dev)

Handle a request based on the request method.

## Installing

```bash
# npm
npm install -s micro-methods

# yarn
yarn add micro-methods
```

## Usage

```js
import methods from 'micro-methods'

export default methods({
  GET(req, res) {
    // this function will serve GET requests
  },
  async POST(req, res) {
    // this function will serve POST requests
  },
})
```
