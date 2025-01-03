import mongoose from "mongoose";

/**
 * @function connectDB
 * @description Establishes a connection to the MongoDB database using the connection URI from environment variables.
 * @async
 * @throws Will exit the process with an error code if the connection fails.
 *
 * @example
 * Call the function to connect to the database
 * connectDB();
 */
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true, // Enables the new MongoDB URL string parser
			useUnifiedTopology: true, // Enables the new connection management engine
		});
		console.log("MongoDB connected successfully");
	} catch (error) {
		console.error("MongoDB connection failed:", error.message);
		process.exit(1);
	}
};

export default connectDB;
