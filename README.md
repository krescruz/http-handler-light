#### Request HTTP
```javascript
httpRequest.get(url, data);
httpRequest.post(url, data);
```

#### Request HTTP
```javascript
httpResponse.success(...);
httpResponse.fail(...);
```

#### But how do I use it?
```javascript
var url = '../endpoint/';
var data = {'name': 'kres', 'lastname': 'cruz'};

//Answer a promise
httpRequest.post(url, data)
  .then(httpResponse.success, httpResponse.fail);
```
