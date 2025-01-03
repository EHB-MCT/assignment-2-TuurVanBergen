# Changelog

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

### [0.1.0] - 2025-01-02

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

#### Changed

- **.gitignore:**
  - Updated to include new dependencies and environment-specific files for both backend and frontend.

#### Removed

- **Legacy Code:**
  - Archived old Rijksmuseum-related files and changes to focus on the new project direction.

### [0.2.0] - 2025-01-03

### Added

- **Form Enhancements:**

  - Improved `MusicForm` to dynamically handle field configuration using a `formFieldsConfig` array.
  - Enhanced form field styling in `formField.css` for better user experience.
  - Added inline error messages for invalid fields with accessible styles.
  - Updated `useMusicForm` to include a reset function for clearing form data post-submission.

- **CSS Updates:**

  - Applied BEM methodology to all form-related CSS classes.
  - Added detailed comments to `musicForm.css` and `formField.css`.

- **Backend Enhancements:**

  - Separated API route handling into `src/routes/apiRoutes.js`.
  - Added `/status` endpoint to check server health.
  - Integrated MongoDB connection.
  - Created a modular `apiRoutes.js` file for scalable routing.

- **Backend Models:**

  - Documenteer het aanmaken van de `Track`-model in de changelog:
    - Validering van velden zoals `title`, `artist`, `year`, `duration`, en `rating`.

- **API Endpoints:**

  - Voeg de volgende routes toe aan de changelog:
    - `GET /api/tracks` - Fetch all tracks.
    - `GET /api/tracks/:id` - Fetch a single track by ID.
    - `POST /api/tracks` - Create a new track.
    - `PUT /api/tracks/:id` - Update an existing track.
    - `DELETE /api/tracks/:id` - Delete a track.

**Controller Refactor:**

- Moved route logic to the `TrackController` to adhere to the SOLID principles.

**Route Organization:**

- Split API routes into `src/routes/api/trackRoutes.js` and `src/routes/apiRoutes.js` for better organization and scalability.

- **Documentation Updates:**

  - Added JSDoc comments to all core components, hooks, and utility functions.
  - Included JSDoc comments and updated the API documentation to reflect the latest changes.
  - Improved inline comments for clarity in both JavaScript and CSS files.

#### Changed

- **Refactored Project Structure:**

  - Separated API route handling into `src/routes/apiRoutes.js`.
  - Moved backend logic for database connection into `config/db.js`.

### Notes:

- For detailed setup instructions, refer to the `README.md`.
- This changelog adheres to the Semantic Versioning conventions for consistent version management.
