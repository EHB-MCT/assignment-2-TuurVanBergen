## Dataflow

**High-Level Overview:**

1. **Frontend:** The user fills out a form with details such as track title, artist, album, etc.
2. **Frontend Logic:** Data is managed using React state (`useState`) and a custom hook (`useMusicForm`).
3. **Output:** Submitted data is logged to the browser console upon form submission.

---

### Detailed Dataflow

#### 1. **Frontend: Form Input**

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
  - Each input field is connected to a field in the React state (`formData`).
  - Changes in input values are handled by the `handleInputChange` function and stored in the `formData` state.

---

#### 2. **Frontend: Form Submission**

- **Description:**
  When the user clicks the **Submit** button:
  1. The form validates the input (preparation for future validation steps).
  2. The `formData` is logged to the browser console.
- **Process:**
  - The `handleFormSubmit` function processes the form:
    - Prevents default browser behavior.
    - Ensures that the input fields are properly managed (validation to be added later).
    - Logs the data to the console using `console.log(formData)`.

---

### Visual Representation (ASCII Diagram)

```plaintext
User Input --> React State (formData) --> Console Log
```
