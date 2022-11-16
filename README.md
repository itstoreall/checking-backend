# Checking backend

1. clone repo
2. yarn install

---

## Create 10 000 payloads

_Postman:_

1. create a new environment
2. create a new collection
3. create a new POST payloads request

### POST payloads

_endpoint:_

```
http://localhost:3000/api/main/create-multi
```

_request:_

```js
{
    "fileName": "values",
    "payloadId": {{payloadId}},
    "payload": {{payload}}
}
```

_response:_

```js
{
    "status": "success",
    "code": 201,
    "data": [
        {
            "payloadId": 1668588595222,
            "payload": 1
        },
    ]
}
```

_Pre-request Script:_

```js
let payloadId = Date.now();
let _payload = pm.environment.get('payload');

if (_payload) {
  pm.environment.set('payload', _payload + 1);
} else if (_payload === 0) {
  pm.environment.set('payload', 1);
} else {
  pm.environment.set('payload', Number(1));
}

pm.environment.set('payloadId', payloadId);
```

_Tests:_

```js
pm.test('create payload', () => {
  const { data } = pm.response.json();
  console.log('payloadId:', data[data.length - 1].payloadId);
  pm.response.to.have.status(201);
});
```

4. save this request to the collection
5. create a new DELETE request

### DELETE payloads

_endpoint:_

```
http://localhost:3000/api/main/reset-multi
```

_request:_

```js
{
    "fileName": "values"
}
```

_response:_

```js
{
    "status": "success",
    "code": 200,
    "data": []
}
```

_Tests:_

```js
pm.test('reset', () => {
  const { data } = pm.response.json();

  pm.response.to.have.status(200);

  if (Array.isArray(data)) {
    pm.environment.set('payload', 0);
  }

  const _payload = pm.environment.get('payload');
  console.log('data, payload:', data, _payload);
});
```

6. save this request to the collection
7. click in the menu \*\*\* "Run collection"
8. select only one POST request
9. enter 10 000 iterations
10. Run collection
11. at the end send DELETE request to reset values

---
