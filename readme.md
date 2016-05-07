# ESLint Settings <br /> [![NPM version](https://badge.fury.io/js/eslint-config-giovanni.svg)](https://badge.fury.io/js/eslint-config-giovanni) [![Dependency Status](https://david-dm.org/giovannicalo/eslint-config.svg)](https://david-dm.org/giovannicalo/eslint-config) [![Build Status](https://travis-ci.org/giovannicalo/eslint-config.svg?branch=master)](https://travis-ci.org/giovannicalo/eslint-config)

[ESLint](https://github.com/eslint/eslint) settings.

## Included Plugins

`eslint-plugin-`

* [`babel`](https://github.com/babel/eslint-plugin-babel)
* [`import`](https://github.com/benmosher/eslint-plugin-import)
* [`react`](https://github.com/yannickcr/eslint-plugin-react)

## Installation

```bash
npm install eslint-config-giovanni
```

## Usage

Create an ESLint settings file as follows.

```javascript
module.exports = { extends: "giovanni" };
```

Depending on the project and the folder, include instead the relevant specific configurations, for instance:

```javascript
module.exports = {
	extends: [
		"giovanni/browser",
		"giovanni/react"
	]
};
```

In this case, there's no need to include the base settings, as they're already included in the specific ones.

### Available configurations

* Base settings: `giovanni`
* Browser: `giovanni/browser`
* Library: `giovanni/library`
* [Node](https://github.com/nodejs/node): `giovanni/node`
* [React](https://github.com/facebook/react): `giovanni/react`
* Test ([Mocha](https://github.com/mochajs/mocha)): `giovanni/test`
