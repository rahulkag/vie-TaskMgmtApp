#Author : kag.rahul@gmail.com
#Git: https://github.com/rahulkag/vue-TaskMgmtApp

## Project Setup
1. Clone
```sh
git clone https://github.com/rahulkag/vue-TaskMgmtApp.git

npm install
```

### Compile and Hot-Reload for Development

Start local server run
```sh
npm run dev
```
To start json server
```sh
npx json-server --watch db.json
```

Launch app in browser
```sh
http://127.0.0.1:5173/addTask
```

### Compile and Minify for Production

```sh
npm run build
```

## Library Used

### Vue.js (vue): Version: ^3.3.11
**Description**: Vue.js is a progressive JavaScript framework for building user interfaces. It is the core library for your Vue.js application.

### Vue Router (vue-router): Version: ^4.2.5
**Description:** Vue Router is the official router for Vue.js. It allows you to define routes in your application, enabling navigation and page/component rendering based on the 

### Vuex (vuex): Version: ^4.1.0
Description: Vuex is a state management library for Vue.js applications. It helps you manage the state of your application in a centralized store, making it easier to handle complex state logic.

### Vite (vite): Version: ^5.0.10
**Description:** Vite is a build tool that serves as a faster alternative to traditional bundlers. It is designed for Vue.js projects and supports features like hot module replacement (HMR) during development.


### Json-Server (json-server): Version: ^0.17.4
**Description:** Json-Server is a tool that allows you to quickly create a RESTful API server using a JSON file. In your project, it's used to serve a mock database during development.

### ESLint (eslint): Version: ^8.49.0
**Description:** ESLint is a linting tool that helps you identify and fix problems in your JavaScript and Vue.js code. It enforces coding standards and best practices.

### Prettier (prettier): Version: ^3.0.3
**Description:** Prettier is a code formatter that helps maintain consistent code style across your project.
These libraries and tools form the foundation for developing, testing, and maintaining a Vue.js application with a focus on modern development practices.



