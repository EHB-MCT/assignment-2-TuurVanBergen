## **Naming Conventions**

### **General Guidelines**

- Use descriptive and consistent names for variables, functions, components, and files.
- Avoid abbreviations unless widely understood (e.g., `id`, `URL`).
- Always name items based on their intent and purpose.

---

### **Comments Guidelines**

- Use comments to clarify intent, not to repeat the code.
- Use JSDoc format for documenting functions, components, and complex logic.
- For inline comments:
  - Use `//` for short, contextual notes.
  - Place comments above the relevant code block.

#### **Examples:**

1. **File-level comments**:  
   _Brief overview of the file’s purpose._

   ```javascript
   /**
    * This file contains helper functions for D3-based visualizations,
    * including drawing axes, tooltips, and legends.
    */
   ```

2. **Function-level comments**:  
   _Document parameters, return values, and behavior._

   ```javascript
   /**
    * Adds tooltip interactivity to a selection of elements.
    *
    * @param {Object} selection - The D3 selection to attach tooltip events.
    * @param {Object} tooltip - The D3 tooltip element.
    * @param {Function} contentCallback - A function that generates the tooltip content.
    */
   ```

3. **Inline comments**:  
   _Explain non-obvious logic or decisions._

   ```javascript
   // Add Y-axis to the left of the chart
   svg.append("g").call(d3.axisLeft(y));
   ```

---

### **JavaScript Naming Conventions**

- **Variables and Functions**: Use `camelCase` for variable and function names.

  - _Example:_

    ```javascript
    let userName = "John";
    function getUserInfo() {
    	return userName;
    }
    ```

- **Constants**: Use `UPPER_SNAKE_CASE` for immutable constants.

  - _Example:_

    ```javascript
    const MAX_USERS = 100;
    ```

- **Classes and Constructors**: Use `PascalCase` for class and constructor names.

  - _Example:_

    ```javascript
    class UserProfile {
    	constructor(name) {
    		this.name = name;
    	}
    }
    ```

---

### **React and JSX Naming Conventions**

- **Component Names**: Use `PascalCase` for React components.

  - _Example:_

    ```javascript
    function UserProfile() {
    	return <div>John</div>;
    }
    ```

- **Component Instances**: Use `camelCase` for component instances.

  - _Example:_

    ```javascript
    const userProfile = <UserProfile />;
    ```

- **File Names**: Use `PascalCase` for component file names.

  - _Example:_

    ```
    UserProfile.jsx
    ```

---

### **HTML and CSS Naming Conventions (BEM)**

- **Blocks**: Use lowercase with hyphens (`kebab-case`).

  - _Example:_

    ```html
    <div class="header"></div>
    ```

- **Elements**: Separate block and element names with a double underscore (`__`).

  - _Example:_

    ```html
    <div class="header__logo"></div>
    ```

- **Modifiers**: Indicate modifiers with a double hyphen (`--`).

  - _Example:_

    ```html
    <button class="button button--primary"></button>
    ```

---

### **File and Folder Naming Conventions**

- **JavaScript Files**: Use `camelCase` for utility/helper files.

  - _Example:_

    ```
    validateForm.js
    ```

- **React Component Files**: Use `PascalCase` for component files.

  - _Example:_

    ```
    MusicForm.jsx
    ```

- **CSS Files**: Use `kebab-case` for CSS and SCSS files.

  - _Example:_

    ```
    form-styles.css
    ```

---

### **Project Structure**

- Follow a modular structure with logical grouping of files and folders:

  ```
  src/
  ├── components/       # React components
  │   ├── MusicForm.jsx
  │   ├── Visualization.jsx
  │   └── Shared/       # Shared smaller components
  ├── pages/            # Full pages
  │   ├── HomePage.jsx
  │   ├── AboutPage.jsx
  │   └── VisualizationsPage.jsx
  ├── styles/           # Global and component-specific styles
  │   ├── global.css
  │   └── components/
  │       └── music-form.css
  ├── utils/            # Helper functions and utilities
  │   ├── d3Helpers.js
  │   └── validation.js
  └── services/         # API and data-related logic
      └── apiService.js
  ```

---

### **Backend Naming Conventions**

---

#### **General Guidelines**

- Use descriptive names for all files, functions, and variables.
- Maintain consistency across the codebase for readability and collaboration.

---

#### **JavaScript Naming Conventions**

- **Route Handlers**: Use `camelCase` for functions handling routes.

  - _Example:_

    ```javascript
    const getAllTracks = (req, res) => {
    	// Logic for fetching tracks
    };
    ```

- **Middleware Functions**: Use `camelCase` for middleware.

  - _Example:_

    ```javascript
    const validateRequest = (req, res, next) => {
    	// Validation logic
    	next();
    };
    ```

- **Controllers and Models**: Use `PascalCase` for class-based models and `camelCase` for functions.

  - _Example:_

    ```javascript
    class TrackModel {
    	constructor(data) {
    		this.data = data;
    	}
    }

    const createTrack = async (req, res) => {
    	// Controller logic
    };
    ```

---

#### **File Naming Conventions**

- **Routes**: Name route files after the resource they handle.

  - _Example:_

    ```
    tracksRoutes.js
    ```

- **Controllers**: Name files after the resource and append `Controller`.

  - _Example:_

    ```
    tracksController.js
    ```

- **Models**: Name files after the resource and append `Model`.

  - _Example:_

    ```
    trackModel.js
    ```

- **Middleware**: Name middleware files after their function.

  - _Example:_

    ```
    authMiddleware.js
    ```

- **Utilities**: Use `camelCase` for utility files.

  - _Example:_

    ```
    dbConnect.js
    ```

---

#### **Project Structure**

```
project-root/
├── config/            # Configuration utilities
│   ├── dbConnect.js   # MongoDB connection setup
├── src/               # Source files
│   ├── controllers/   # Route handling logic
│   │   ├── tracksController.js
│   ├── models/        # Mongoose models
│   │   ├── trackModel.js
│   ├── routes/        # Express routes
│       ├── tracksRoutes.js
│       └── spotifyRoutes.js
│
├── index.js           # Application entry point
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Locked dependency versions
└── README.md          # Documentation

```

---

#### **Examples**

- **Track Route Example** (`tracksRoutes.js`):

  ```javascript
  const express = require("express");
  const {
  	getAllTracks,
  	createTrack,
  } = require("../controllers/tracksController");
  const router = express.Router();

  // Fetch all tracks
  router.get("/", getAllTracks);

  // Create a new track
  router.post("/", createTrack);

  module.exports = router;
  ```

- **Controller Example** (`tracksController.js`):

  ```javascript
  const Track = require("../models/trackModel");

  // Get all tracks
  const getAllTracks = async (req, res) => {
  	try {
  		const tracks = await Track.find();
  		res.status(200).json({ message: "Tracks fetched successfully", tracks });
  	} catch (err) {
  		res
  			.status(500)
  			.json({ message: "Error fetching tracks", error: err.message });
  	}
  };

  // Create a new track
  const createTrack = async (req, res) => {
  	try {
  		const newTrack = new Track(req.body);
  		await newTrack.save();
  		res
  			.status(201)
  			.json({ message: "Track created successfully", track: newTrack });
  	} catch (err) {
  		res
  			.status(400)
  			.json({ message: "Failed to create track", error: err.message });
  	}
  };

  module.exports = { getAllTracks, createTrack };
  ```

- **Model Example** (`trackModel.js`):

  ```javascript
  const mongoose = require("mongoose");

  const trackSchema = new mongoose.Schema(
  	{
  		trackTitle: { type: String, required: true },
  		artistName: { type: String, required: true },
  		albumName: { type: String },
  		releaseYear: { type: Number },
  		genre: { type: String },
  		duration: { type: Number, required: true },
  		rating: { type: Number, min: 0, max: 5 },
  	},
  	{ timestamps: true }
  );

  const Track = mongoose.model("Track", trackSchema);

  module.exports = Track;
  ```

---

### **References**

1. [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
2. [React Docs - Component Naming](https://react.dev)
3. [BEM Methodology](https://getbem.com/)
4. [MDN Web Docs - Naming Conventions](https://developer.mozilla.org/)
5. [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)
6. [Mongoose Documentation](https://mongoosejs.com/)

```

```
