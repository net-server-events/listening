# net-server-events-listening
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

a net.Server event handler for the listening event

## table of contents
* [notes](#notes)
* [installation](#installation)
* [api](#api)
* [usage](#usage)
    * [basic](#basic)
* [license](#license)

## notes
* expects `this` to be bound to the server instance
* expects `server.address()` to be a callable function

## installation
```javascript
npm install net-server-events-listening
```

## api
```javascript
/**
 * @returns {undefined}
 */
function listeningEvent()
```

## usage
### basic
```javascript
var listening = require( 'net-server-event-listening' )
var server = https.createServer( ssloptions, app )

server.on( 'listening', listening )
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/net-server-events/listening/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/net-server-events/listening?branch=master
[mit-license]: https://raw.githubusercontent.com/net-server-events/listening/master/license.txt
[npm-image]: https://img.shields.io/npm/v/net-server-events-listening.svg
[npm-url]: https://www.npmjs.com/package/net-server-events-listening
[nsp-image]: https://nodesecurity.io/orgs/net-server-events/projects/969575c3-4575-4bd8-b3b2-1d0a1066ccb6/badge
[nsp-url]: https://nodesecurity.io/orgs/net-server-events/projects/969575c3-4575-4bd8-b3b2-1d0a1066ccb6
[travis-image]: https://travis-ci.org/net-server-events/listening.svg?branch=master
[travis-url]: https://travis-ci.org/net-server-events/listening
