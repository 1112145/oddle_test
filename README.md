# ODDLE ASSIGNMENT - NGUYEN DANG KHOA

**1. QUICKSTART**

    npm i && npm start

This will install *node_modules* and start a express server to send the html to browser at http://localhost:3033.

**2. WORK ON LOCAL**

Go to folder client and install *node_modules* 

    cd ./client && npm i

a. Start a webpack dev server

    npm run dev-server

This command will start a webpack dev server at http://localhost:8000 incase you dont want to use express server.

b. Build a dev bundle.js file

    npm run webpack_dev

c. Build a production bundle.js file

    npm run webpack_main

This will build production file. that express server will send this file to client.