# Progress Log

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

### January 2, 2025

**Tasks Completed:**

- **Project Initialization:**

  - Defined separate folder structures for frontend and backend to ensure modularity.
  - Initialized React frontend using `vite` for faster development.
  - Configured ESLint and Prettier for code linting and formatting.
  - Created backend structure and aligned it with best practices.

- **Frontend Setup:**

  - Implemented a basic layout for the React application with routing (`react-router-dom`).
  - Created placeholders for `HomePage`, `AboutPage`, `VisualizationsPage` and `NotFoundPage`.

- **Backend Setup:**
  - Defined folder hierarchy for `controllers`, `routes`, `models`, `services`, and `utils`.

---

### January 3, 2025

**Tasks Completed:**

- **Frontend Form Implementation:**

  - Developed the `MusicForm` component to collect music-related data, including fields for `trackTitle`, `artistName`, `albumName`, `releaseYear`, `genre`, `duration`, and `rating`.
  - Utilized a custom hook `useMusicForm` to manage form state, validation, and submission logic.
  - Created a `FormField` component for rendering reusable input fields with label, error handling, and dynamic styles.
  - Centralized form field configuration in `formFieldsConfig` for maintainability and scalability.
  - Added basic form validation logic using the `validateMusicForm` utility.

- **Styling and Design:**

  - Styled the `MusicForm` and `FormField` components using BEM methodology.
  - Ensured consistent styling and responsiveness across all form elements.

**Challenges:**

- Designing reusable components while maintaining simplicity and scalability.
- Balancing dynamic rendering with user-friendly error handling.

**Next Steps:**

1. **Frontend Enhancements:**

   - Integrate the Spotify API to allow users to search for tracks and autofill form fields.

2. **Backend Development:**

   - Implement routes to handle form submissions and validate incoming data.
   - Connect to MongoDB and create a schema for storing user-submitted data.

3. **Data Visualization:**
   - Begin exploring D3.js to create interactive and dynamic visualizations.

Hier is de progress log update in het juiste formaat:

---

### January 3, 2025

**Tasks Completed:**

- **Backend Basic Configuration:**

  - Set up the main server file (`index.js`):
    - Configured the Express server.
    - Configured server port using the `.env` file.
    - Integrated routing logic via `apiRoutes.js`.

- **Database Connection:**

  - Created `db.js` under the `config/` directory to handle MongoDB connection:
    - Used the `dotenv` package to manage the database URI securely.
    - Implemented logic to handle connection success and error cases.
    - Ensured the server starts only after a successful database connection.

- **Routing Structure:**

  - Added `apiRoutes.js` in the `routes/` folder:
    - Configured a placeholder `/` route.

---

**Challenges:**

- Debugging MongoDB connection errors caused by incorrect environment variable setup.
- Designing a scalable and modular routing structure for future API expansion.

---

**Next Steps:**

1. **Backend API Development:**

   - Create a `/music` endpoint to handle incoming data submissions.
   - Define a `musicModel.js` schema in the `models/` folder for database operations.

2. **Frontend Integration:**

   - Implement HTTP requests from the frontend to the `/music` endpoint for data submission.

3. **Testing:**

   - Test MongoDB insertion with sample data and verify retrieval via API routes.

4. **Error Handling:**
   - Add centralized error handling for both API and database-related issues.

---

**Notes:**

- **Database Name:** `vibeview`.
- **Environment Variables:** Server port and database URI are securely stored in the `.env` file.
- **Documentation:** Updates will be made to the [Dataflow](DATAFLOW.md) and [Changelog](CHANGELOG.md) as features are added.
