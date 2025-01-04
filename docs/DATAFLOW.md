## **Dataflow**

### **High-Level Overview:**

1. **Frontend:**

   - The user fills out a form with details such as track title, artist, album, etc.
   - Input data is managed using React state (`useState`) and a custom hook (`useMusicForm`).
   - Tracks are dynamically fetched and displayed when navigating to the visualization page using a custom hook (`useFetchTracks`).

2. **Backend:**

   - Data submitted from the frontend is sent to the backend via a POST request.
   - The backend validates the data using Mongoose schema validators before storing it in the MongoDB database.
   - Tracks are fetched from the database and sent to the frontend via GET requests.

3. **Output:**

   - Fetched data is used for visualization or further processing on the frontend.

---

### **Detailed Dataflow**

#### **1. Frontend: Form Input**

- **Description:**
  The user fills out a form with the following fields:
  - Track Title
  - Artist Name
  - Album Name
  - Release Year
  - Genre
  - Duration (in seconds)
  - Rating (1-5)
- **Process:**
  - Each input field is bound to a field in the React state (`formData`).
  - The `handleInputChange` function updates the state whenever a user modifies an input field.

---

#### **2. Frontend: Form Submission**

- **Description:**
  When the user clicks the **Submit** button:

  1. The form validates the input in the frontend (basic validation for required fields).
  2. A POST request is sent to the backend with the `formData`.

- **Process:**
  - The `handleFormSubmit` function:
    - Prevents default browser behavior.
    - Sends the data to the backend API endpoint `/api/tracks` using `fetch`.
    - Clears the form after submission if the request is successful.

---

#### **3. Frontend: Fetching Tracks**

- **Description:**
  When the user navigates to the visualization page:

  1. A GET request is triggered to fetch all tracks stored in the database.
  2. The fetched data is stored in React state and displayed dynamically.

- **Process:**
  - A custom hook (`useFetchTracks`) manages the fetch operation.
  - The hook fetches data from the `/api/tracks` endpoint and handles loading and error states.

---

#### **4. Backend: Data Processing**

- **Description:**
  - The backend receives the POST and GET requests.
  - Validates the data using Mongoose schema validation (e.g., required fields, numeric ranges, etc.).
  - Stores the validated data in the MongoDB database.
- **Process:**
  - Routes handle incoming requests:
    - **POST `/api/tracks`**: Adds a new track to the database.
    - **GET `/api/tracks`**: Fetches all stored tracks for visualization.
    - **GET `/api/tracks/:id`**: Fetches a specific track by its ID.
    - **PUT `/api/tracks/:id`**: Updates an existing track.
    - **DELETE `/api/tracks/:id`**: Deletes a track by its ID.

---

### **Visual Representation (Updated ASCII Diagram)**

```plaintext
User Input --> React State (formData) --> POST Request --> Backend Validation --> MongoDB Storage
    ^                                                                               |
    |                                                                               v
GET Request <-- useFetchTracks Hook <-- Visualization Page <-- Rendered Track Data
```

---

### **Future Extensions**

1. **Spotify API Integration:**

   - Use the Spotify API to dynamically fetch track suggestions and auto-fill form fields.

2. **Advanced Validation:**

   - Add comprehensive validation in both frontend and backend to prevent redundant checks.

3. **Error Handling:**

   - Implement user-friendly error messages for failed submissions, validation errors, or failed fetch operations.

4. **Interactive Data Visualization:**
   - Utilize libraries like D3.js or Chart.js to create dynamic and engaging visualizations for track data.

---
