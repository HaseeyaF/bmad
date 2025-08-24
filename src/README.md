# User Registration System

A full-stack user registration system built with React, TypeScript, Node.js, and MongoDB.

## Project Structure

```
src/
├── backend/         # Express.js backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
└── frontend/        # React frontend
    ├── src/
    │   ├── components/
    │   ├── App.tsx
    │   └── index.tsx
    ├── package.json
    └── tsconfig.json
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository
2. Set up the backend:
   ```bash
   cd backend
   npm install
   cp src/.env.example src/.env    # Create and configure your .env file
   npm run dev                     # Start the development server
   ```

3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   npm start                       # Start the development server
   ```

4. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Features

- User registration with email and password
- Input validation
- Password hashing
- JWT token generation
- MongoDB database integration
- TypeScript support
- Responsive design

## API Endpoints

### POST /api/auth/register
Register a new user

Request body:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

Response:
```json
{
  "token": "jwt-token-here"
}
```

## Security Features

- Password hashing using bcrypt
- JWT for authentication
- Input validation
- CORS enabled
- Environment variables for sensitive data

## Development

- Backend runs on port 5000
- Frontend runs on port 3000
- MongoDB runs on default port 27017
