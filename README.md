# Schedule Share

## Overview
Schedule Share is a modern web application for managing and sharing personal schedules.

## Technologies
- Frontend: React.js with TypeScript
- Backend: Node.js with Express
- Database: MySQL

## Prerequisites
- Node.js (v14+)
- npm
- MySQL

## Setup

### Backend
1. Navigate to `backend` directory
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with your database credentials
4. Run database migrations
5. Start the server:
   ```
   npm run dev
   ```

### Frontend
1. Navigate to `frontend/schedule-share` directory
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Database Setup
1. Create a MySQL database named `schedule_share_db`
2. Run the following SQL to create the schedules table:
   ```sql
   CREATE TABLE schedules (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     description TEXT,
     start_time DATETIME NOT NULL,
     end_time DATETIME NOT NULL
   );
   ```

## Features
- Create new schedules
- View existing schedules
- Responsive design

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License.
