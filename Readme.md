
# request-id-middleware

  Middleware for adding a unique `requestId` to each request.

## Example

```js
var id = require('request-id-middleware')();

app.get('/', id, function (req, res, next) {
  res.set({ 'X-Request-Id', req._id });
  res.send(200);
});
```

## API

### requestId(options)
  
  Generate your own `requestId` middleware function with custom `options`:

```js
{
  "header": 'request-id' // read header `request-id`
  "param": '_requestId', // try getting it from the param `requestId` too
  "key": '_id' // set the request id as `req._id`
}
```