# search-engine-client

**A nodejs module to extract links from Google, Bing etc..**

This original project is [search-engine-client](https://gitlab.com/autokent/search-engine-client)

## Installation
`npm install search-engine-client`

## Usage

### Google
```js
const sec = require('search-engine-client');

sec.google("text to search").then(function(result){
    console.log(result);
});
```

### Bing
```js
const sec = require('search-engine-client');

sec.bing("text to search").then(function(result){
    console.log(result);
});
```

### AOL
```js
const sec = require('search-engine-client');

sec.aol("text to search").then(function(result){
    console.log(result);
});
```

### ASK
```js
const sec = require('search-engine-client');

sec.ask("text to search").then(function(result){
    console.log(result);
});
```

### Yahoo
```js
const sec = require('search-engine-client');

sec.yahoo("text to search").then(function(result){
    console.log(result);
});
```

### DuckDuckGo
```js
const sec = require('search-engine-client');

sec.duckduckgo("text to search").then(function(result){
    console.log(result);
});
```

### Baidu
```js
const sec = require('search-engine-client');

sec.baidu("text to search").then(function(result){
    console.log(result);
});
```

## Options

### defaults
```js
let default_options={
	count: 0,
	offset: 0,
	agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
	lang: "en-US,en;q=0.9",
	debug: false,
	show: false,
	screenshot: false,
	wait: 1000
};
```

### count (number)
The minimum link count to extract, higher return count takes more time.

```js
const sec = require('search-engine-client');

const options = {
    agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
    count:15
};

sec.aol("text to search",options).then(function(result){
    console.log(result);
});
```

### agent (string)
The User-Agent request header.

```js
const sec = require('search-engine-client');

const options = {
    agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36"
};

sec.aol("text to search",options).then(function(result){
    console.log(result);
});
```

### lang (string)
The Accept-Language request HTTP header.

### debug (boolean)
Prints debug logs.

### show (boolean)
Show browser screen.

```js
const sec = require('search-engine-client');

const options = {
    agent:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36",
    count:15,
    show:true
};

sec.aol("text to search",options).then(function(result){
    console.log(result);
});
```

### screenshot (boolean)
Enable or disable checkpoints screenshots.

### wait (number)
Wait after search(ms).

## Test
* `mocha` or `npm test`
* Check [test folder](https://github.com/vladwelt/search-engine-client/tree/master/test) and [quickstart.js](https://github.com/vladwelt/search-engine-client/blob/master/quickstart.js) for extra usages.


### Submitting an Issue
If you find a bug or a mistake, you can help by submitting an issue to [Github Repository](https://github.com/vladwelt/search-engine-client/issues)

### Creating a Pull Request
Feel free to create a pull request

## License
[MIT licensed](https://github.com/vladwelt/search-engine-client/blob/master/LICENSE) and all it's dependencies are MIT or BSD licensed.
