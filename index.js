
var defaults = require('defaults');
var uuid = require('node-uuid');

/**
 * Expose `generate`.
 */

module.exports = generate;

/**
 * Generate a requestId middleware.
 *
 * @param {Object} options [optional]
 *   @param {String} header
 *   @param {String} param
 *   @param {String} key
 * @return {Function}
 */
function generate (options) {

  options = defaults(options, {
    header: 'request-id',
    param: 'requestId',
    key: '_id',
    format: 'v4',
    setHeader: false
  });

  // only for numeric format
  var last = 0;
  var max = 9007199254740992; // max number for numeric ids

  // possible id formats
  var generators = {
  
    'v1': function() {
      return uuid.v1();
    },

    'v4': function() {
      return uuid.v4();
    },

    'numeric': function() { // allow to sort requests
      if(last++ >= max) last = 0;
      return last;
    },

    'stripe': function() { // Stripe like ids
      return 'req_xxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  };

  return function requestId (req, res, next) {
    var id = req[options.key];

    if (id) return next();
    id = req.param(options.header) || req.get(options.header) || generators[options.format || 'v4']();
    req[options.key] = id;

    if (options.setHeader) {
      res.setHeader('X-Request-Id', id);
    }

    next();
  };
}
