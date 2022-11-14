# Checking backend

---

### POST payload

_endpoint:_

```
http://localhost:5001/api/main/create
```

_request:_

```js
{
    "value": "Payload"
}
```

_response:_

```js
{
    "status": "success",
    "code": 201,
    "data": {
        "value": "Payload"
    }
}
```

---

### GET payload

_endpoint:_

```
http://localhost:5001/api/main/
```

_response:_

```js
{
    "status": "success",
    "code": 200,
    "data": {
        "value": "Payload"
    }
}
```

---
