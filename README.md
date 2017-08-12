Promisify
=========

Promisify converts a function that takes a callback into a function that takes a callback _or_ returns a promise.

Installation
------------

```bash
npm install promisify-optional-callback
```

Usage
-----

```javascript
const promisify = require('promisify-optional-callback');

function example(callback) {
	console.log('Hello world');

	callback();
}

const examplePromise = promisify(example);

examplePromise(function (error) {
	console.log('Inside a callback');
});

// OR

examplePromise()
.then(function () {
	console.log('Inside a promise');
})
.catch(function (error) {
	console.log('Experienced an error');
});

```

If `callback` is called with a non-null object as its first argument, that is handled as an error and the promise will reject.
