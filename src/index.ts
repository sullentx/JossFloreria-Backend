import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/Saludo', (_req, res) => {
    console.log("Hola mundo desde express");
    res.send("Se ha ejecutado un get");
});

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ' + PORT);
});