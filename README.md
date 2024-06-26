# Project Title
  task-management-destination
## Introduction
Streamline task management with this platform. Effortlessly organize your tasks, saving you valuable time. Quickly log in or sign up to get started. Collaborate efficiently by adding multiple users to a single task. Get things done efficiently with this app.
### Home Page 
![Screenshot 2024-04-21 131419](https://github.com/Upendrapal0607/simple-task-management-app/assets/112810287/60032fc1-5aef-4d88-b71a-3fc698fc8d85)
### Login page
![Screenshot 2024-04-21 131353](https://github.com/Upendrapal0607/simple-task-management-app/assets/112810287/c081760b-1266-49dd-9d8c-6bdc88567519)
### Task Page 
![Screenshot 2024-04-21 131517](https://github.com/Upendrapal0607/simple-task-management-app/assets/112810287/4b63bdbb-bee4-47a4-8f86-4494284fa47d)

## Project Type
It is a Fullstack (MERN base) project
## Deplolyed App
### Frontent
 [Live](https://6624b5b0b7face6973c03ac0--frolicking-torte-7907d8.netlify.app/)

### Backent
 https://task-managment-backend-rosy.vercel.app

## Video Walkthrough of the project

   Link- `https://youtu.be/iNZvRLa7FR8`

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects.
### Frontend
Locally it will run:-
```bash
clone git clone  https://github.com/Upendrapal0607/todo-app.git
cd frontend/simple-task-management-app
npm install
npm start
```
it will running on `http://localhost:3000/`

### Backend
Locally it will run:- `http://localhost:8080/`
```bash
clone same repo for backend
cd backend
npm install
npm npm run start
```
### Database
.env file have variable:
MongoDB_URL, you want to connect to within your database so use it.
you have to add it for make connection with the server
access mongoDB url from .local.env file
also other security
## API Endpoints
POST /user/register - register end point
POST /user/login - login end point
POST /user/logout - log out end point

GET /task/ - retrieve all items
POST /task/addtask - create a new item
PATCH /task/update/:taskId
DELETE /task/delete/:taskId

## Technology Stack
- Node.js
- Express.js
- MongoDB
- React.js
- Redux
- Other libraries/modules
