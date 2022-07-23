# Learning React.js, Node.js and Server Deployment

Originally from <https://cloud.tencent.com/developer/article/1968399>

## Server Setup

### react, node and express

```bash

# create react app
mkdir my-app
cd my-app

# create client
npx create-react-app client

#create api for node
mkdir api
cd api
npm init -y

#install express for node
npm i --save express

```

### server.js

Create server.js for server set-up
See <./api/server.js>

### package.json

Add "start" script in package.json, the global configuration file, to start server.js:

```json
"scripts": {
    "start": "node /server.js"
}

```

### Start the Server

Launch the server by calling "start" that has just been created (in the root directory):

```bash

npm start

```
