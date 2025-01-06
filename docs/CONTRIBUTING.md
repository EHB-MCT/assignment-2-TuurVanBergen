# Contributing to VibeView

I'm excited that you’re interested in contributing to VibeView! By working together, we can make music data visualization more powerful and accessible for everyone.

---

## **Code of Conduct**

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md). We aim to foster a respectful, inclusive, and collaborative environment.

---

## **Getting Started**

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **MongoDB** (for backend database)
- **Git** (for version control)

### Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/EHB-MCT/assignment-2-TuurVanBergen.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd assignment-2-TuurVanBergen
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the backend server**:
   ```bash
   node index.js
   ```
5. **Start the frontend development server**:
   ```bash
   npm run dev
   ```

### Verify the setup:

- Visit `http://localhost:3000` for the frontend.
- Check `http://localhost:<PORT>/api/status` for the API server status.

---

## **Branches and Workflow**

We follow a structured branching strategy:

- **`main`**: Stable, production-ready code. Avoid pushing directly to `main`.
- **`dev`**: Active development. All pull requests should target this branch.

### Feature Branch Naming

Use descriptive names for feature branches:

```bash
git checkout -b feature/visualization-enhancement
```

---

## **Making Changes**

1. **Fork the repository**: Create a personal copy of the repository on GitHub.
2. **Create a branch**: Use a descriptive branch name for your changes.
3. **Commit changes**: Use meaningful commit messages.
   ```bash
   git commit -m "Add: Spotify search integration"
   ```
4. **Push to your fork**:
   ```bash
   git push origin feature/visualization-enhancement
   ```
5. **Submit a pull request**: Open a pull request targeting the `dev` branch. Add a clear description of your changes.

---

## **Code Style Guidelines**

### Formatting

- Use **Prettier** for consistent formatting:
  ```bash
  npm run format
  ```
- Follow the **BEM** convention for CSS class names in the frontend.

### General Conventions

- Use **ES6+ features** where possible.
- Keep functions small and modular.
- Use meaningful variable and function names.

### Example:

```javascript
const calculateAverageRating = (tracks) => {
	const totalRating = tracks.reduce((sum, track) => sum + track.rating, 0);
	return totalRating / tracks.length;
};
```

---

## **Testing**

All new features must include tests, and all existing tests must pass before submitting changes.

### Testing Instructions

1. **Run backend tests**:
   ```bash
   npm run test:server
   ```
2. **Run frontend tests**:
   ```bash
   npm run test:frontend
   ```
3. **Write new tests**: Ensure that your tests cover edge cases and are located in the appropriate `tests` directory.

---

## **Updating Documentation**

If your changes affect functionality, update the relevant documentation:

- **API Documentation** (`API_DOCUMENTATION.md`)
- **Changelog** (`CHANGELOG.md`)
- **Readme** (`README.md`)
- Inline code comments (use JSDoc for complex logic).

---

## **Submitting a Pull Request**

When opening a pull request:

1. Ensure your branch is up to date with `dev`.
2. Provide a clear and concise description of your changes.
3. Link to any relevant issues using GitHub keywords (e.g., "Fixes #123").
4. Add screenshots or GIFs if your changes involve UI updates.

---

## **Communication**

- Have questions or feedback? Contact us via [email](mailto:tuur.van.bergen@student.ehb.be) or on our GitHub Discussions page.

---

## **Licensing**

By contributing to VibeView, you agree that your contributions will be licensed under the [MIT License](LICENSE.md).

---

## **Thank You!**

Thank you for taking the time to contribute to VibeView. Your efforts are greatly appreciated, and we look forward to collaborating with you!

```
---
```
