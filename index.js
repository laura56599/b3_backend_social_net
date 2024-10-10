import express from "express";
import connection from "./database/connection.js";
import cors from "cors";
import bodyParser from "body-parser";
import UserRoutes from "./routes/user.js";
import PublicationRoutes from "./routes/publication.js";
import FollowRoutes from "./routes/follows.js";


console.log("API Node en ejecucion")

connection();

const app = express();
const puerto = process.env.PORT || 3900;

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus:204
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//rutas del aplicativo (modulos)
app.use('/api/user', UserRoutes);
app.use('/api/publication', PublicationRoutes);
app.use('/api/follow', FollowRoutes);

app.listen(puerto, () => {
    console.log("Servidor escuchando en el puerto", puerto);
});

export default app;