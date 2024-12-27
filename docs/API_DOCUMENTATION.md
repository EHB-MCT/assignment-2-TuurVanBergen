# API Documentation

## Overview

This project integrates with the Rijksmuseum API to fetch data about artworks and their metadata. It provides functionality to retrieve collections based on various filters and parameters.

---

## Endpoints

- **Base URL:** `https://www.rijksmuseum.nl/api`
- **Example Endpoint:** `/en/collection?key={API_KEY}&type=painting`
  - Retrieves a list of paintings from the Rijksmuseum.

---

## Authorization

To access the API, an API key is required. You can obtain a key by registering at:
[Rijksmuseum website](https://www.rijksmuseum.nl/).

- **Key Storage:**
  Store your API key securely in an `.env` file:

  ```env
  VITE_API_KEY=your_api_key_here
  ```

- **Integration:**
  The API key is dynamically injected into the application using environment variables for security.

---

## API Configuration

The API configuration is managed in the `src/api/config.js` file. This file defines the base URL, API key, and default parameters for API requests.

### **Configuration Object**

```javascript
export const API_CONFIG = {
	baseURL: "https://www.rijksmuseum.nl/api/en/collection",
	apiKey: import.meta.env.VITE_API_KEY,
	defaultParams: {
		type: "painting",
		"f.dating.period": "17",
		productionPlaces: "Netherlands",
		ps: 100, // Default set to 100 results per page
	},
};
```

- **Base URL**: Specifies the main endpoint for the Rijksmuseum collection API.
- **API Key**: Retrieved securely from environment variables.
- **Default Parameters**:
  - `type`: Specifies the type of object (e.g., painting).
  - `f.dating.period`: Filters artworks by time period (e.g., 17th century).
  - `productionPlaces`: Filters artworks by production location (e.g., Netherlands).
  - `ps`: Sets the number of results per page (pagination).

---

## Example Usage

### **Fetching Data**

#### **Initialization**

```javascript
import {
	initializeRijksmuseumData,
	fetchedData,
} from "./fetchRijksmuseumData.js";

async function initApp() {
	try {
		await initializeRijksmuseumData();
		console.log(fetchedData); // Output the fetched data
	} catch (error) {
		console.error("Error during initialization:", error);
	}
}

initApp();
```

---

## Error Handling

- **Logging Errors**:
  All errors encountered during data fetching are logged using:

  ```javascript
  console.error("Fetch Error:", error);
  ```

- **Error Propagation**:
  Errors are rethrown to ensure they can be handled by the caller:
  ```javascript
  throw error;
  ```

---

## Notes

- Ensure your `.env` file is not committed to version control to maintain API key security.
- Customize the default parameters in `config.js` as needed to fit project requirements.
- Refer to the [Rijksmuseum API Documentation](https://www.rijksmuseum.nl/en/api) for additional query parameters and filters.
