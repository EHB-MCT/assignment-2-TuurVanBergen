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
  			"title": "Track Title",
  			"artist": "Artist Name",
  			"album": "Album Name",
  			"year": 2023,
  			"genre": "Pop",
  			"duration": 210,
  			"rating": 4.5,
  			"createdAt": "2023-07-01T10:10:10.000Z",
  			"updatedAt": "2023-07-01T10:10:10.000Z"
  		}
  	]
  }
  ```

---

#### **3. Get Track By ID**

- **URL**: `/tracks/:id`
- **Method**: `GET`
- **Description**: Fetches a specific track by its unique ID.

##### **Request**

- **Headers**: None.
- **Body**: None.
- **Path Parameters**:
  - **`id`** (string, required): The unique ID of the track to fetch.

##### **Response**

- **Status Code**: `200 OK`
- **Body**:

  ```json
  {
  	"message": "Track fetched successfully",
  	"track": {
  		"_id": "64bfcce4eab79d3d1a9f774d",
  		"title": "Track Title",
  		"artist": "Artist Name",
  		"album": "Album Name",
  		"year": 2023,
  		"genre": "Pop",
  		"duration": 210,
  		"rating": 4.5,
  		"createdAt": "2023-07-01T10:10:10.000Z",
  		"updatedAt": "2023-07-01T10:10:10.000Z"
  	}
  }
  ```

- **Status Code**: `404 Not Found`
- **Body**:
  ```json
  {
  	"message": "Track not found"
  }
  ```

---

#### **4. Create a New Track**

- **URL**: `/tracks`
- **Method**: `POST`
- **Description**: Creates a new track and saves it to the database.

##### **Request**

- **Headers**:

  - **`Content-Type`**: `application/json`

- **Body**:
  ```json
  {
  	"title": "Track Title",
  	"artist": "Artist Name",
  	"album": "Album Name",
  	"year": 2023,
  	"genre": "Pop",
  	"duration": 210,
  	"rating": 4.5
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
  		"title": "Track Title",
  		"artist": "Artist Name",
  		"album": "Album Name",
  		"year": 2023,
  		"genre": "Pop",
  		"duration": 210,
  		"rating": 4.5,
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

#### **5. Update a Track**

- **URL**: `/tracks/:id`
- **Method**: `PUT`
- **Description**: Updates an existing track by its unique ID.

##### **Request**

- **Headers**:

  - **`Content-Type`**: `application/json`

- **Body**:

  ```json
  {
  	"title": "Updated Track Title",
  	"artist": "Updated Artist Name"
  }
  ```

- **Path Parameters**:
  - **`id`** (string, required): The unique ID of the track to update.

##### **Response**

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
  	"message": "Track updated successfully",
  	"track": {
  		"_id": "64bfcce4eab79d3d1a9f774d",
  		"title": "Updated Track Title",
  		"artist": "Updated Artist Name",
  		"album": "Album Name",
  		"year": 2023,
  		"genre": "Pop",
  		"duration": 210,
  		"rating": 4.5,
  		"createdAt": "2023-07-01T10:10:10.000Z",
  		"updatedAt": "2023-07-01T12:12:12.000Z"
  	}
  }
  ```

---

#### **6. Delete a Track**

- **URL**: `/tracks/:id`
- **Method**: `DELETE`
- **Description**: Deletes a track by its unique ID.

##### **Request**

- **Headers**: None.
- **Body**: None.
- **Path Parameters**:
  - **`id`** (string, required): The unique ID of the track to delete.

##### **Response**

- **Status Code**: `200 OK`
- **Body**:

  ```json
  {
  	"message": "Track deleted successfully",
  	"track": {
  		"_id": "64bfcce4eab79d3d1a9f774d",
  		"title": "Track Title",
  		"artist": "Artist Name",
  		"album": "Album Name",
  		"year": 2023,
  		"genre": "Pop",
  		"duration": 210,
  		"rating": 4.5,
  		"createdAt": "2023-07-01T10:10:10.000Z",
  		"updatedAt": "2023-07-01T10:10:10.000Z"
  	}
  }
  ```

- **Status Code**: `404 Not Found`
- **Body**:
  ```json
  {
  	"message": "Track not found"
  }
  ```
