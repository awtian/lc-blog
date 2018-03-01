# Hacktivpres - A simple blogging app
 * menggunakan Express Js untuk api server.
 * menggunakan mongoDB dan mongoose untuk database serta ODM
 * Vue.js untuk front-end.

 # SERVER 
 ## How to install
 ``` sh
 $ npm install
 ```


## User Routing
| Route | HTTP | Description |
| ------| ----- | ---------- |
| /users/ | GET | get all user |
| /users/ | POST | sign up / sign in|


## Blog routing
| Route | HTTP | Description |
| ------ | ----- | --------- |
| /blogs | GET | get all blogs |
| /blogs/:id | GET | get detail blogs |
| /blogs/:id | PUT | edit blog user authorized only |
| /blogs/delete | DELETE | delete blog user authorized only |
| /blogs/author/:author | GET | get article by category |
| /blogs/category/:category | GET | get article by category |

## usage 
``` sh
$ npm run dev
$ npm start
```
## ACCESS API VIA
`http://localhost:3000/api` 