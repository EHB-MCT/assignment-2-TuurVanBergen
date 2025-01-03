## **API Documentation**

### **General Information**

- **Base URL**: `http://localhost:<PORT>/api`
- **Content-Type**: `application/json`

---

### **Endpoints**

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
