
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
    key: '_id'
  });

  return function requestId (req, res, next) {
    if (req[options.key]) return next();
    req[options.key] = req.param(options.header) ||
                       req.get(options.header) ||
                       uuid.v4();
    next();
  };
}
