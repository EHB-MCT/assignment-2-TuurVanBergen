## **API Documentation**

### **General Information**

- **Base URL**: `http://localhost:<PORT>/api`
- **Content-Type**: `application/json`

---

### **Endpoints**

---

#### **1. Server Status**

- **URL**: `/status`
- **Method**: `GET`
- **Description**: Checks if the server is running and returns a confirmation message.

##### **Request**

- **Headers**: None.
- **Body**: None.

##### **Response**

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
  	"message": "Server is running!"
  }
  ```

---

#### **2. Get All Tracks**

- **URL**: `/tracks`
- **Method**: `GET`
- **Description**: Fetches all tracks stored in the database.

##### **Request**

- **Headers**: None.
- **Body**: None.

##### **Response**

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
  	"message": "Tracks fetched successfully",
  	"tracks": [
  		{
  			"_id": "64bfcce4eab79d3d1a9f774d",
  			"trackTitle": "Track Title",
  			"artistName": "Artist Name",
  			"albumName": "Album Name",
  			"releaseYear": 2023,
  			"genre": "Pop",
  			"duration": 210,
  			"rating": 5,
  			"mood": "Happy",
  			"activity": "Studying",
  			"listeningContext": "At home",
  			"energyLevel": 4,
  			"createdAt": "2023-07-01T10:10:10.000Z",
  			"updatedAt": "2023-07-01T10:10:10.000Z"
  		}
  	]
  }
  ```

---

#### **3. Create a New Track**

- **URL**: `/tracks`
- **Method**: `POST`
- **Description**: Creates a new track and saves it to the database.

##### **Request**

- **Headers**:

- **`Content-Type`**: `application/json`

- **Body**:

```json
{
	"trackTitle": "Track Title",
	"artistName": "Artist Name",
	"albumName": "Album Name",
	"releaseYear": 2023,
	"genre": "Pop",
	"duration": 210,
	"rating": 4,
	"mood": "Happy",
	"activity": "Studying",
	"listeningContext": "At home",
	"energyLevel": 4
}
```

##### **Response**

- **Status Code**: `201 Created`
- **Body**:

  ```json
  {
  	"message": "Track created successfully",
  	"track": {
  		"_id": "64bfcce4eab79d3d1a9f774d",
  		"trackTitle": "Track Title",
  		"artistName": "Artist Name",
  		"albumName": "Album Name",
  		"releaseYear": 2023,
  		"genre": "Pop",
  		"duration": 210,
  		"rating": 4,
  		"mood": "Happy",
  		"activity": "Studying",
  		"listeningContext": "At home",
  		"energyLevel": 4,
  		"createdAt": "2023-07-01T10:10:10.000Z",
  		"updatedAt": "2023-07-01T10:10:10.000Z"
  	}
  }
  ```

- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
  	"message": "Failed to create track",
  	"error": "ValidationError: Title is required"
  }
  ```

---

#### **4. Search Spotify Tracks**

- **URL**: `/spotify/search`
- **Method**: `GET`
- **Description**: Fetches track search results from the Spotify API based on a query.

##### **Request**

- **Headers**:

  - **`Authorization`**: `Bearer <Spotify Access Token>`

- **Query Parameters**:
  - **`q`** (string, required): Search query (e.g., track name or artist).
  - **`type`** (string, optional): Type of search, default is `track`.

##### **Response**

- **Status Code**: `200 OK`
- **Body**:

  ```json
  {
  	"message": "Spotify tracks fetched successfully",
  	"tracks": [
  		{
  			"id": "1a2b3c4d",
  			"title": "Track Title",
  			"artist": "Artist Name",
  			"album": "Album Name",
  			"releaseYear": 2023,
  			"duration": 210
  		}
  	]
  }
  ```

- **Status Code**: `400 Bad Request`
- **Body**:
  ```json
  {
  	"message": "Failed to fetch Spotify tracks",
  	"error": "Invalid query"
  }
  ```

---

### **Summary of Current Functionality**

The API currently supports the following:

1. **Status Check**: Ensures the server is running.
2. **Fetching All Tracks**: Retrieves all tracks stored in the database.
3. **Creating a Track**: Allows clients to create and save new tracks.
4. **Spotify Search**: Enables searching for tracks using the Spotify API.

---

### **Notes for Future Enhancements**

- Add support for detailed Spotify track metadata retrieval (e.g., genres, lyrics).
- Add functionality for track updates (`PUT`) and deletions (`DELETE`).

---
