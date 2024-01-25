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


# Task Management Application
### Overview
The Task Management Application is a simple web application developed using Vue.js for managing tasks. It allows users to view a list of tasks, mark tasks as completed, add new tasks, and manage task details. The application employs Vue Router for navigation, Vuex for state management, and utilizes a mock API server using json-server.

### Clone the repository
git clone https://github.com/yourusername/task-management-app.git


### Components
TaskList.vue
Description of the TaskList component.

AddTask.vue
Description of the AddTask component.

Routing
The application uses Vue Router for navigation between pages.

State Management
The application utilizes Vuex for centralized state management.

Styling
The application is styled using SCSS for a responsive and visually appealing design. Vue's scoped styles are employed to encapsulate component-specific styles.

API Integration
The application simulates API calls using json-server. It fetches tasks and adds new tasks.

Documentation
Detailed documentation can be found in the README.md file. It provides instructions on running the application locally, project structure, design decisions, and any additional libraries used.

Conclusion
The Task Management Application is a simple yet effective solution for managing tasks. Further enhancements and features can be added based on specific requirements and user feedback.
