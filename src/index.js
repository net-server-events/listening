/* eslint consistent-this: off */
/* eslint no-invalid-this: off */

'use strict'

/**
 * Class: net.Server
 * Event: 'listening'
 *
 * Emitted when the server has been bound after calling server.listen.
 *
 * @link https://nodejs.org/dist/latest-v6.x/docs/api/net.html#net_event_listening
 *
 * @returns {undefined}
 */
function listeningEvent() {
  var server = this

  console.log( '[info]', new Date(), 'net.Server listening', server.address() )
}

module.exports = listeningEvent
