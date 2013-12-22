
# request-id-middleware

  Add a unique `requestId` uuid to each [express](https://github.com/visionmedia/express) request for logging.

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
  "header": 'request-id' // read header `request-id`
  "param": '_requestId', // try getting it from the param `requestId` too
  "key": '_id' // set the request id as `req._id`
}
```

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

