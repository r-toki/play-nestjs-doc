```sh
curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
curl http://localhost:3000/profile -H "Authorization: Bearer"
```
