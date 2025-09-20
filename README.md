# InstaDev
<a href="https://instadev-rx.vercel.app/">Here you go</a>
InstaDev is a full-stack application designed to provide AI-powered tools for developers. It includes features such as AI chat, code generation, workspace management, and user authentication.

---

## Features

### Backend
- **AI Integration**: 
  - Chat generation, code generation, and prompt enhancement using the Gemini AI model.
- **User Authentication**:
  - Google OAuth-based login and JWT for session management.
- **Workspace Management**:
  - Create, update, and manage workspaces with messages and file data.
- **Database**:
  - MongoDB for storing user and workspace data.

### Frontend
- **React-based UI**:
  - Components for authentication, workspace management, and AI interactions.
- **State Management**:
  - Redux for managing user and workspace states.
- **UI Components**:
  - Custom reusable components for buttons, dialogs, tooltips, and more.

---

## Project Structure

### Backend
```
backend/
├── configs/          # Configuration files for AI models
├── controllers/      # API controllers for handling requests
├── data/             # Static data like prompts and colors
├── db/               # Database connection and authentication middleware
├── models/           # Mongoose models for MongoDB
├── routes/           # API routes
├── index.js          # Entry point for the backend server
```

### Frontend
```
frontend/
├── public/           # Static assets
├── src/              # Source code for the React app
│   ├── components/   # Reusable React components
│   ├── data/         # Static data for the frontend
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions
│   ├── pages/        # Page components for routing
│   ├── redux/        # Redux store and slices
│   ├── Utils/        # Constants and helper functions
├── index.html        # Main HTML file
├── vite.config.js    # Vite configuration
```

---

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- A Gemini API key
- A Google OAuth Client ID

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/GovindKumar04/Insta-dev.git
   cd Insta-dev
   ```

2. Install dependencies:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory with the following variables:
     ```plaintext
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     GOOGLE_CLIENT_ID=your_google_client_id
     GEMINI_API_KEY=your_gemini_api_key
     ```

4. Start the development servers:
   ```bash
   # Backend
   cd backend
   npm start

   # Frontend
   cd ../frontend
   npm run dev
   ```

---

## API Endpoints

### User Routes
- `POST /login`: Google login
- `GET /getuser`: Get user details
- `POST /logout`: Logout user
- `POST /update/tokens`: Update user tokens

### Workspace Routes
- `POST /create`: Create a new workspace
- `GET /get/:id`: Get a workspace by ID
- `POST /update/filedata/:id`: Update workspace file data
- `POST /update/messages/:id`: Update workspace messages
- `GET /all`: Get all workspaces for a user
- `POST /delete`: Delete a workspace

### AI Routes
- `POST /chat`: Generate AI chat responses
- `POST /code`: Generate AI code responses
- `POST /enhance`: Enhance AI prompts

---

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Google OAuth
- Gemini AI

### Frontend
- React.js
- Redux
- Vite
- CSS Modules
- Tailwind CSS

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

---

## Acknowledgments
- [Google Generative AI](https://ai.google/) for powering the AI features.
- [MongoDB](https://www.mongodb.com/) for database management.
- [React](https://reactjs.org/) for the frontend framework.
