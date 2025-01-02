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

- **Documentation:**
  - Updated `README.md` with project structure and setup instructions.
  - Archived the old changelog for reference.

#### Changed

- **.gitignore:**
  - Updated to include new dependencies and environment-specific files for both backend and frontend.

#### Removed

- **Legacy Code:**
  - Archived old Rijksmuseum-related files and changes to focus on the new project direction.
