# Auth App - MERN Stack Authentication System

A secure and modern authentication system built with the MERN stack (MongoDB, Express, React/Next.js, Node.js).

## Features

- **User Registration** - Create new accounts with email validation
- **User Login** - Secure authentication with JWT tokens
- **Password Security** - bcrypt password hashing
- **Profile Management** - Update user profile information
- **Password Change** - Secure password update functionality
- **Protected Routes** - Secure pages requiring authentication
- **Rate Limiting** - Protection against brute force attacks
- **Toast Notifications** - User-friendly feedback
- **Responsive Design** - Works on all devices

## Tech Stack

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- Helmet for security headers
- express-rate-limit for rate limiting
- express-validator for input validation

### Frontend
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Axios for API requests
- js-cookie for token storage
- Sonner for toast notifications
- Lucide React for icons

## Project Structure

```
auth-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── users.js
│   ├── utils/
│   │   ├── validators.js
│   │   └── responseHelpers.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── login/
│   │   ├── register/
│   │   ├── profile/
│   │   ├── settings/
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── Alert.js
│   │   ├── Avatar.js
│   │   ├── Badge.js
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Input.js
│   │   ├── Layout.js
│   │   ├── ProtectedRoute.js
│   │   ├── Spinner.js
│   │   └── ToastProvider.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── hooks/
│   │   └── useCustomHooks.js
│   ├── lib/
│   │   ├── constants.js
│   │   └── utils.js
│   └── package.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

### Configuration

1. Create `.env` file in backend:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/auth-app
   JWT_SECRET=your-secret-key
   JWT_EXPIRES_IN=7d
   CLIENT_URL=http://localhost:3000
   ```

2. Create `.env.local` file in frontend:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

### Running the Application

1. Start backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start frontend server (in another terminal):
   ```bash
   cd frontend
   npm run dev
   ```

3. Open http://localhost:3000

## API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | User login |
| POST | /api/auth/logout | User logout |
| GET | /api/auth/me | Get current user |
| GET | /api/auth/verify | Verify token |

### User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/users/profile | Get user profile |
| PUT | /api/users/profile | Update profile |
| PUT | /api/users/password | Change password |

## Security Features

- Password hashing with bcrypt (10 rounds)
- JWT token authentication
- Rate limiting on auth endpoints
- Helmet security headers
- Input validation and sanitization
- CORS configuration
- Request size limits

## License

MIT License - feel free to use this project for personal or commercial purposes.