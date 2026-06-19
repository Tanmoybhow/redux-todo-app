# Redux Todo App

A modern Todo Application built with React, Redux, Redux Persist, and Tailwind CSS. This project demonstrates CRUD operations, state management with Redux, and local data persistence.

## Features

* Add new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed or pending
* Filter tasks by:

  * All
  * Active
  * Completed
* Data persistence using Redux Persist (tasks remain after page refresh)
* Responsive and clean user interface
* State management using Redux

## Tech Stack

* React
* Redux
* Redux Persist
* Tailwind CSS
* React Icons

## Project Structure

```text
src/
├── components/
│   ├── PopUp.jsx
│   └── TodoCard.jsx
├── redux/
│   ├── action/
│   │   └── todoAction.js
│   ├── reducer/
│   │   └── todoReducer.js
│   └── store.js
├── App.js
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd redux-todo-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Redux Functionality

### Actions

* ADD_TODO
* EDIT_TODO
* DELETE_TODO
* TOGGLE_TODO

### State Structure

```javascript
{
  todoList: [
    {
      id: 123456,
      inputData: "Learn Redux",
      completed: false,
      createdAt: "Date and Time"
    }
  ]
}
```

## Learning Outcomes

Through this project, I practiced:

* Redux fundamentals
* Actions and Reducers
* Global state management
* CRUD operations
* Data persistence using Redux Persist
* React component architecture
* Controlled forms
* Filtering and updating data


## Author

Tanmoy Bhowmik

Frontend Developer | React Developer
