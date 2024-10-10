import { connect } from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const connection = async () => {
    try {
        await connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error al conectar la BD", error);
        throw new Error("No se ha podido conectar a la base de datos!")
    }
};

export default connection;
