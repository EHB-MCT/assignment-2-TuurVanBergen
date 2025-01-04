# **Progress Log**

## Project Initialization

**Project Name:** VibeView  
**Date Initialized:** January 2, 2025  
**Goal:** Build a web application to collect user data via a frontend form, store it in a backend database, and visualize it interactively.  
**Technologies:** JavaScript, React, Node.js, Express.js, MongoDB, D3.js (for visualization).

---

## Folder Structure

### Frontend

- **`src/`:**  
  Contains the React application source code. Includes directories for:

  - **`components/`:** Reusable UI components.
  - **`pages/`:** Page-specific components (e.g., Home, About, Visualization).
  - **`styles/`:** CSS/SCSS files for global and component-level styling.
  - **`routes/`:** Manages application routing logic.

- **`public/`:**  
  Static assets for the frontend (e.g., images, favicon).

- **`tests/`:**  
  Testing scripts for validating frontend functionality.

---

### Backend

- **`config/`:**  
  Configuration files (e.g., environment variables, database connections).

- **`src/`:**  
  Backend application logic, structured into:

  - **`controllers/`:** Handles HTTP requests and responses.
  - **`routes/`:** API route definitions (e.g., `/api/data`).
  - **`models/`:** Database schemas and models for MongoDB.
  - **`services/`:** Encapsulates business logic and data handling.
  - **`utils/`:** Reusable utility functions (e.g., validation, error handling).

- **`tests/`:**  
  Backend unit and integration tests.

---

## Progress Updates

### **January 2, 2025**

#### **Tasks Completed:**

- **Project Initialization:**

  - Defined separate folder structures for frontend and backend to ensure modularity.
  - Initialized React frontend using `vite` for faster development.
  - Configured ESLint and Prettier for code linting and formatting.
  - Created backend structure and aligned it with best practices.

- **Frontend Setup:**

  - Implemented a basic layout for the React application with routing (`react-router-dom`).
  - Created placeholders for `HomePage`, `AboutPage`, `VisualizationsPage`, and `NotFoundPage`.

- **Backend Setup:**
  - Defined folder hierarchy for `controllers`, `routes`, `models`, `services`, and `utils`.

---

### **January 3, 2025**

#### **Tasks Completed:**

##### **Frontend:**

- Developed the `MusicForm` component to collect music-related data, including fields for `trackTitle`, `artistName`, `albumName`, `releaseYear`, `genre`, `duration`, and `rating`.
- Utilized a custom hook `useMusicForm` to manage form state, validation, and submission logic.
- Created a `FormField` component for rendering reusable input fields with label, error handling, and dynamic styles.
- Centralized form field configuration in `formFieldsConfig` for maintainability and scalability.
- Added basic form validation logic using the `validateMusicForm` utility.
- Styled the `MusicForm` and `FormField` components using BEM methodology.

##### **Backend:**

- Created the `TrackSchema` in `models/track.js`:
  - Included fields for `title`, `artist`, `album`, `year`, `genre`, `duration`, and `rating`.
  - Added validation logic (e.g., `year` must be between 1500 and the current year, `rating` must be between 1-5).
  - Used `timestamps` to automatically track creation and update times.
- Created `routes/api/trackRoutes.js` with the following endpoints:
  - `GET /api/tracks`: Fetch all tracks.
  - `POST /api/tracks`: Add a new track to the database.

#### **Challenges:**

- Debugging MongoDB connection errors caused by incorrect environment variable setup.
- Designing reusable components while maintaining simplicity and scalability.

---

### **January 4, 2025**

#### **Tasks Completed:**

##### **Frontend Integration:**

- Established communication between the frontend and backend:
  - **GET Request**: Fetched all tracks from the backend and displayed them on the `VisualizationsPage`.
  - **POST Request**: Submitted user-inputted track data from the form to the backend.
- Created `TrackDataContainer`:
  - A container component to fetch, manage, and pass track data to child components for rendering.
  - Used `useFetchTracks` hook to manage fetching and state handling.

##### **Testing:**

- Tested the frontend integration using mocked API responses.
- Verified database operations via Postman for `GET` and `POST` routes.

#### **Challenges:**

- Handling controlled vs. uncontrolled components in the form input fields.
- Debugging fetch-related errors during the frontend-backend integration.

#### **Next Steps:**

1. Plan the integration of the Spotify API to enhance track entry automation.
2. Implement error handling for failed API requests in both frontend and backend.
3. Start designing the data visualization using D3.js or a similar library.

---

### Notes:

- **Database Name:** `vibeview`.
- **Environment Variables:** Server port and database URI are securely stored in the `.env` file.

---
