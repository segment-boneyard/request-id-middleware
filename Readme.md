# request-id-middleware

  Add a unique `requestId` uuid to each [express](https://github.com/visionmedia/express) request for logging.

  [Koa version](https://github.com/segmentio/koa-request-id).

## Example

```js
var requestId = require('request-id-middleware')();

app.get('/', requestId, function (req, res, next) {
  res.set({ 'X-Request-Id', req._id });
  res.send(200);
});
```

## API

### requestId(options)
  
  Generate a request id middleware with `options` defaulting to:

```js
{
  "header": 'request-id', // read header `request-id`
  "param": '_requestId', // try getting it from the param `requestId` too
  "key": '_id', // set the request id as `req._id`
  "format": 'v4', // one of formats 'v1', 'v4', 'numeric', 'stripe'
  "setHeader": false // set response X-Request-Id header with generated value
}
```

Formats:
- 'v1' is a time based uuid format
- 'v4' is a random uuid format
- 'numeric' is a number that increasing every request
- 'stripe' is Stripe objects format like 'req_2cef88e8622a00'


## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

