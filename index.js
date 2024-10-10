import express from "express";
import connection from "./database/connection.js";
import cors from "cors";

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

app.use('/api/user', UserRoutes);
app.use('/api/publication', PublicationRoutes);
app.use('/api/follow', FollowRoutes);

app.listen(puerto, () => {
    console.log("Servidor escuchando en el puerto", puerto);
});

export default app;