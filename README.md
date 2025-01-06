# **VibeView: A Data Collection and Visualization Tool**

A full-stack project designed to collect, store, and visualize user data interactively. The project is modular and extensible, with integrated Spotify API functionality for easier track entry.

---

## **Features**

### **Frontend**

- **Dynamic Form**: A responsive React-based form with Spotify integration for quick track entry.
- **Custom Hooks**: Simplified state management and validation using custom hooks.
- **Interactive Visualizations**: Charts built with D3.js to display mood, activity, and energy insights.
- **Spotify Integration**: Search Spotify tracks and autofill form fields for easier data entry.

### **Backend**

- **MongoDB Storage**: Tracks stored with robust schema validation and timestamping.
- **Modular Design**: Adheres to SOLID principles for scalability and maintainability.

### **Visualization**

- **Mood-Activity Chart**: Stacked bar chart linking moods to activities, showcasing global trends in listening behavior.
- **Mood-Energy Scatter Chart**: Scatter plot revealing the interplay between energy levels, duration, and ratings of tracks.

---

## **Technologies Used**

- **Frontend**: React, Vite, D3.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Spotify API**: Integrated for real-time track search and autofill.

---

---

## **Insights from Visualizations**

### **Mood-Activity Chart**

- **What it Shows**:  
  How moods (e.g., "Happy", "Sad") align with activities like "Studying" or "Driving."

- **Key Findings**:

  - "Studying" links to "Motivated" and "Relaxed."
  - "Driving" shows diverse moods based on personal preferences.

- **Why It Matters**:  
  Helps users curate playlists tailored to specific activities, enhancing focus during study or energy while driving.

---

### **Mood-Energy Scatter Chart**

- **What it Shows**:  
  Relationships between energy levels, duration, ratings, and moods.

- **Key Findings**:

  - High-rated tracks often have moderate energy.
  - "Sad" tracks are lower energy and longer, reflecting emotional depth.

- **Why It Matters**:  
  Offers insights for crafting playlists based on mood and energy balance, aiding both users and recommendation systems.

---

### **Why Overall**

These insights enhance how users engage with music, aligning it with their emotional and practical needs, while also improving algorithmic recommendations.

---

---

## **Installation**

### **Prerequisites**

- Node.js (v16 or later)
- MongoDB (local or cloud instance, e.g., MongoDB Atlas)
- Spotify Developer Account (for API keys)

---

### **Setup**

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
     SPOTIFY_CLIENT_ID=<your-spotify-client-id>
     SPOTIFY_CLIENT_SECRET=<your-spotify-client-secret>
     PORT=3000
     ```

5. Start the development servers:

   ```bash
   cd frontend && npm run dev # Start Frontend
   cd ../backend && npm run dev # Start Backend
   ```

6. Access the application:
   - Frontend: Visit `http://localhost:5173`
   - Backend API: Visit `http://localhost:3000/`

---

## **Folder Structure**

### **Frontend**

- **`components/`**: Reusable UI components that can be used across multiple pages (e.g., `FormField`, `Navigation`, `Footer`).
- **`pages/`**: Page-specific components representing different views of the application (e.g., `HomePage`, `VisualizationsPage`).
- **`styles/`**: Global and modular CSS/SCSS files for styling components and layouts.
- **`utils/`**: Shared utility functions for validation, data formatting, and other helper tasks.
- **`hooks/`**: Custom React hooks for managing state and logic, such as `useMusicForm` and `useFetchTracks`.
- **`services/`**: Handles API calls and data fetching logic, such as communication with the backend and Spotify API.
- **`routes/`**: Manages application routing and route-specific configurations using `react-router-dom`.

---

### **Backend**

---

### **Backend**

- **`controllers/`**: Handles route logic and business logic for specific API endpoints (e.g., `trackController.js`).
- **`models/`**: MongoDB schemas defining the data structure and validation rules (e.g., `track.js`).
- **`routes/`**: API endpoint definitions, linking HTTP methods to controllers (e.g., `trackRoutes.js`).
- **`services/`**: Encapsulates interactions with external APIs (e.g., Spotify) and database queries.
- **`utils/`**: Reusable helper functions for validation, error handling, and token management.
- **`config/`**: Configuration files for connecting to the database (`db.js`) and managing environment variables.

---

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

## **Sources and References**

1. [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
2. [React Docs - Component Naming](https://react.dev)
3. [BEM Methodology](https://getbem.com/)
4. [MDN Web Docs - Naming Conventions](https://developer.mozilla.org/)
5. [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
6. [Mongoose Documentation](https://mongoosejs.com/)
7. [Error solving & Feedback](https://chatgpt.com/c/6776e9e5-53f0-8009-b16d-c4b59acacdc3)
8. Spotify API Documentation: [Spotify for Developers](https://developer.spotify.com/documentation/)

#### **Video Tutorials**

1. **"SOLID Principles Explained"**

   - **URL:** [https://www.youtube.com/watch?v=lAOgD_udvTw](https://www.youtube.com/watch?v=lAOgD_udvTw)
   - **Description:** A beginner-friendly explanation of SOLID principles and their application in software design.

2. **"Design Patterns for Beginners"**
   - **URL:** [https://www.youtube.com/watch?v=lAOgD_udvTw](https://www.youtube.com/watch?v=lAOgD_udvTw)
   - **Description:** This video provides a practical guide to understanding and implementing common design patterns.

---

## **Live Links**

De applicatie is live en toegankelijk via de volgende links:

- **Frontend**: [https://assignment-2-tuurvanbergen-1.onrender.com/](https://assignment-2-tuurvanbergen-1.onrender.com/)
- **Backend API**: [https://assignment-2-tuurvanbergen-2.onrender.com/](https://assignment-2-tuurvanbergen-2.onrender.com/)

## **Conclusion**

VibeView bridges the gap between user data collection and meaningful visual insights, empowering users to explore how music shapes emotions and activities in daily life.

---
