# **VibeView: A Data Collection and Visualization Tool**

A full-stack project designed to collect, store, and visualize user data interactively. The project is modular and extensible, with integrated Spotify API functionality for easier track entry.

---

## **Features**

- **Frontend:**
  - Collect user input via a responsive React-based form.
  - Manage form state using React Hooks and custom hooks for validation and submission logic.
  - Dynamically fetch track suggestions using the Spotify API for seamless data entry.
  - Fetch stored track data dynamically for visualization via `TrackDataContainer` and `useFetchTracks` hook.
- **Backend:**
  - Store user data securely in a MongoDB database using a Node.js and Express API.
  - Modular structure with clear separation of concerns following the SOLID principles.
  - Supports `GET` and `POST` routes for track management.
- **Visualization:**
  - Fetch and visualize stored data in real-time (planned feature for future updates).

---

## **Installation**

### **Prerequisites**

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance, e.g., MongoDB Atlas)

---

### **Steps**

1. Clone the repository:

   ```bash
   git clone https://github.com/EHB-MCT/assignment-2-TuurVanBergen.git
   ```

2. Navigate to the project directory:

   ```bash
   cd assignment-2-TuurVanBergen
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

4. Configure environment variables:

   - Create a `.env` file in the `backend` folder with the following configuration:
     ```env
     MONGO_URI=<your-mongodb-connection-string>
     PORT=3000
     ```

5. Start the development servers:

   ```bash
   # Frontend
   cd frontend
   npm run dev

   # Backend
   cd ../backend
   npm run dev
   ```

6. **Access the application**:
   - Frontend: Visit `http://localhost:5173` (default Vite port).
   - Backend API: Visit `http://localhost:3000/`.

---

## **Backend Structure**

### **Key Features**

- **API Routes:**

  - Modular routing using `apiRoutes.js` and individual route files (e.g., `trackRoutes.js`).
  - Fully documented routes with JSDoc comments for clarity and maintainability.
  - Integrated with the frontend for `GET` and `POST` operations:
    - `GET /api/tracks` - Fetch all tracks from the database.
    - `POST /api/tracks` - Add new tracks to the database.

- **Database:**

  - Tracks stored in a MongoDB database using a well-defined `TrackSchema`.

- **Controllers:**
  - All route logic is handled by controllers (e.g., `TrackController.js`) for better adherence to SOLID principles.

### **Example Routes**

- `GET /api/tracks`: Fetch all tracks from the database.
- `POST /api/tracks`: Create a new track.
- `GET /api/tracks/:id`: Fetch a track by its ID.
- `PUT /api/tracks/:id`: Update a track.
- `DELETE /api/tracks/:id`: Delete a track.

---

## **Documentation**

This project includes the following additional documentation:

- [API Documentation](./docs/API_DOCUMENTATION.md): Details about the backend API endpoints.
- [Changelog](./docs/CHANGELOG.md): Log of changes made throughout the project.
- [Progress](./docs/PROGRESS.md): Updates about project progress.
- [Dataflow](./docs/DATAFLOW.md): Explanation of how data flows between frontend, backend, and database.
- [Processes](./docs/PROCESSES.md): Detailed descriptions of the project processes.
- [Naming Conventions](./docs/NAMING_CONVENTIONS.md): Standards for naming conventions.
- [License](LICENSE): Information about the project license.

---

## **Technologies Used**

- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Visualization:** D3.js (planned)

---

## **Author**

- **Tuur Van Bergen**

---

## **Future Integrations**

- **Interactive Visualizations:**
  - Use libraries like D3.js or Chart.js to create dynamic and engaging visualizations of the stored track data.

---

## **Notes**

- [Changelog](./docs/CHANGELOG.md): Log of changes made throughout the project.

---
