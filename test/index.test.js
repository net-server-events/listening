'use strict'

var listeningEvent = require( '../src' )
var sinon = require( 'sinon' )
var spy_console_log = sinon.spy( console, 'log' )
var tap = require( 'tap' )

tap.test( 'listening called',
  function ( t ) {
    var address = {
      address: '127.0.0.1',
      family: 'IPv4',
      port: 12346
    }

    var server = {
      address: function () {
        return address
      }
    }

    spy_console_log.resetHistory()
    listeningEvent.call( server )

    t.true( spy_console_log.called, 'console.log called' )

    t.same(
      spy_console_log.getCall( 0 ).args[ 2 ],
      'net.Server listening',
      'should console.log `net.Server listening`'
    )

    t.same(
      spy_console_log.getCall( 0 ).args[ 3 ],
      address,
      'should console.log `{ address: \'127.0.0.1\', family: \'IPv4\', port: 12346 }`'
    )

    t.end()
  }
)
