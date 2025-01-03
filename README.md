# VibeView a Data Collection and Visualization Tool

A full-stack project designed to collect, store, and visualize user data interactively. The project is modular and extensible, allowing future integration with external APIs such as the Spotify API.

## Features

- **Frontend:** Collect user input via a responsive React-based form.
- **Backend:** Store user data securely in a database using a Node.js and Express API.
- **Visualization:** Fetch and visualize stored data in real time.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance, e.g., MongoDB Atlas)

### Steps

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

4. Configure environment variables\*\*:

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

## Documentation

This project includes the following additional documentation:

- [API Documentation](API_DOCUMENTATION.md): Details about the backend API endpoints.
- [Changelog](CHANGELOG.md): Log of changes made throughout the project.
- [Progress](PROGRESS.md): Updates about project progress.
- [Dataflow](DATAFLOW.md): Explanation of how data flows between frontend, backend, and database.
- [Processes](PROCESSES.md): Detailed descriptions of the project processes.
- [Naming Conventions](NAMING_CONVENTIONS.md): Standards for naming conventions.
- [License](LICENSE): Information about the project license.

---

## Technologies Used

- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js
- **Database:** [MongoDB]
- **Visualization:** D3.js

---

## Author

- **Tuur Van Bergen**

---

## Notes

- The original project, focused on Rijksmuseum Data Visualization, has been archived. This project reflects a new direction and purpose.
- For archived content and structure, refer to previous commits.
- Future integrations, such as the Spotify API for enhanced user interaction, are planned.
- Regular updates will be made to the [Changelog](CHANGELOG.md).

---
