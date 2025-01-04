## **Changelog**

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## Archived Changelog (Rijksmuseum Data Visualization)

The following changes were part of the old project setup and are now archived:  
[0.1.0] - 2024-12-26: Initial project setup for Rijksmuseum visualization.  
[0.2.0] - 2024-12-27: API integration and initial visualizations.

---

## Current Project: VibeView - Data Visualization

### **[0.1.0]** - 2025-01-02

### Added

- **Project Initialization:**

  - Created a new project with a clear goal: collecting, storing, and visualizing music data via forms.
  - Defined backend structure: `config`, `src` (with `controllers`, `models`, `routes`), `tests`, and `utils`.

- **Frontend Setup:**

  - Initialized React frontend with `vite.config.js`.
  - Created directory structure: `components`, `pages`, `styles`, `routes`, etc.
  - Implemented routing with `AppRouter` to handle navigation between `HomePage`, `About`, `VisualizationsPage`, and `NotFoundPage`.
  - Added global styling via `index.css`.
  - Integrated `Navigation` and `Footer` components.

- **Form Implementation:**

  - Added a `MusicForm` component to manually input music track details.
  - Utilized a `FormField` component to dynamically generate form fields based on configuration.
  - Integrated a custom hook `useMusicForm` to manage form state, validation, and submission.
  - Created `formFieldsConfig` for centralized form field configuration.
  - Implemented basic form validation via `validateMusicForm` utility.
  - Added dynamic error handling and styling for invalid fields.

- **Documentation:**

  - Updated `README.md` with project structure and setup instructions.
  - Archived the old changelog for reference.

---

### **[0.2.0]** - 2025-01-03

### Added

- **Form Enhancements:**

  - Improved `MusicForm` to dynamically handle field configuration using a `formFieldsConfig` array.
  - Enhanced form field styling in `formField.css` for better user experience.
  - Added inline error messages for invalid fields with accessible styles.
  - Updated `useMusicForm` to include a reset function for clearing form data post-submission.

- **Backend Enhancements:**

  - Separated API route handling into `src/routes/apiRoutes.js`.
  - Added `/status` endpoint to check server health.
  - Integrated MongoDB connection.
  - Created a modular `apiRoutes.js` file for scalable routing.

- **Backend Models:**

  - Created the `track` model:
    - Validation for fields such as `trackTitle`, `artistName`, `releaseYear`, `duration`, and `rating`.

- **API Endpoints:**

  - `GET /api/tracks` - Fetch all tracks.
  - `GET /api/tracks/:id` - Fetch a single track by ID.
  - `POST /api/tracks` - Create a new track.
  - `PUT /api/tracks/:id` - Update an existing track.
  - `DELETE /api/tracks/:id` - Delete a track.

---

### **[0.3.0]** - 2025-01-04

### Added

- **Frontend-Backend Integration:**

  - Implemented full integration between the frontend and backend for `GET` and `POST` requests.
  - Data flow established:
    - Fetching all tracks from the backend to display on the frontend.
    - Submitting new tracks from the form to the backend for database storage.

- **API Enhancements:**

  - Updated API endpoints:
    - Improved error handling for invalid track submissions.
    - Added validation messages.

- **Documentation Updates:**

  - Updated API documentation to reflect the implemented `GET` and `POST` functionality.

---

### **Notes**

- For detailed setup instructions, refer to the `README.md`.
- Future updates will include Spotify API integration.
- This changelog adheres to the Semantic Versioning conventions for consistent version management.

---
