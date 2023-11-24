const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const postsRouter = require("./routers/postsRouter");
const routeNotFoundMiddlware = require("./middlwares/routeNotFound");

const app = express();
app.use(express.json());

// Rotte per l'entità post
app.use("/posts", postsRouter);

// Errore 404 - Pagina non trovata
app.use(routeNotFoundMiddlware);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port http://localhost:" + process.env.PORT);
});
