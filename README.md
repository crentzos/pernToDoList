# pernToDoList
This is a Fullstack web application, meaning I created both the User Interface and the server-side logic and infrastructure we need for our app to be functional, based on the PERN (PostgreSQL, Express.js, React, Node.js) designed to manage To-Do items.

More specifically:

PostgreSQL serves as our database

Express.js is responsible for handling API endpoints

I used React to create the user interface

Finally, Node.js is the platform (or runtime environment) I used to enable JavaScript to process web requests and interact with the database.


Features:
  Create, read, update, and delete tasks.
  Mark tasks as complete or incomplete.
  User-friendly and intuitive interface.
  Secure user authentication.
  Real-time updates using WebSockets.
  Responsive design for various screen sizes.
  Easily customizable and extendable.



Configuration:
  Create a PostgreSQL database for the application.
  
  Rename the .env.example file in the server directory to .env and update it with your database credentials and secret key for JWT authentication.

Copy code:
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name
DB_HOST=your_database_host
DB_PORT=your_database_port
JWT_SECRET=your_secret_key








Getting Started:
  
  Follow these steps to get the PERN Stack To-Do List Application up and running on your local machine.

Prerequisites:
  Before you begin, make sure you have the following software installed on your system:

Node.js: Download and install Node.js from nodejs.org.
  PostgreSQL: Download and install PostgreSQL from postgresql.org.
  Installation

1. Clone this repository to your local machine:
  
Copy code:
git clone https://github.com/HImHome/pernToDoList

2. Navigate to the project directory:

Copy code:
cd pern-stack-todo-list

3. Install the server dependencies:

Copy code:
cd server
npm install

4. Install the client dependencies:

Copy code:
cd ../client
npm install


Usage
Start the server:

Copy code:
  cd server
  npm start

Start the client:

Copy code:
  cd ../client
  npm start
