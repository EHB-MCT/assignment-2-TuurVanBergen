import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import routes from "./src/routes/apiRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

/**
 * @function connectDB
 * @description Connects the application to the MongoDB database using configuration from the environment variables.
 */
connectDB();

/**
 * @description Sets up API routes under the "/api" path.
 * All routes defined in the `apiRoutes.js` file will be accessible via "/api".
 */
app.use("/api", routes);

/**
 * @constant {number} PORT
 * @description The port on which the server will listen. Defaults to 5000 if not specified in the environment variables.
 */
const PORT = process.env.PORT || 5000;

/**
 * @description Starts the server and listens for incoming requests on the specified port.
 */
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
