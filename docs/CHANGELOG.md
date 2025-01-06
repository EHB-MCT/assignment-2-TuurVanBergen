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

### **[0.4.0]** - 2025-01-05

### Added

- **Spotify API Integration:**

  - Added `SpotifySearchInput` component to integrate Spotify search functionality into the form.
  - Implemented dropdown track selection with automatic form filling.

- **Frontend Enhancements:**

  - Refactored `MusicForm` to include dynamic Spotify search capabilities.
  - Improved `FormField` component for reusability and better validation handling.

- **Validation Updates:**

  - Enhanced `validateMusicForm` to include year range validation.
  - Updated `formFieldsConfig` to align with validation rules.

---

### **[0.5.0]** - 2025-01-06

### Added

- **Data Visualization:**

  - Created `MoodActivityChart` and `MoodEnergyScatter` components using D3.js.
  - Implemented tooltip interactivity with `addTooltip` helper for consistent user experience.
  - Added dynamic legends using the `drawLegend` helper for better data clarity.
  - Included reusable helper functions in `d3Helpers.js` for drawing axes, tooltips, and legends.

- **Frontend Refactor:**

  - Enhanced code modularity by refactoring reusable logic into helpers and utility files.
  - Added comprehensive inline comments and JSDoc-style documentation for all modules.

- **Database Enhancements:**

  - Added new fields to the database schema for storing personal fields (e.g., user-specific metadata or preferences).
  - Updated the backend model to validate and handle these new fields.

- **API Enhancements:**

  - Updated API endpoints to handle the newly added fields:
    - `POST /api/tracks` and `PUT /api/tracks/:id` now accept and validate the additional fields.
    - `GET /api/tracks` and `GET /api/tracks/:id` now include the new fields in the response.
  - Improved error handling for invalid or missing data in these fields.

- **Documentation:**

  - Updated API documentation to include details about the new personal fields in the request and response schemas.
  - Added detailed explanations for the changes in backend models and endpoints.

---

### **Notes**

- This changelog adheres to the Semantic Versioning conventions for consistent version management.
