const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const postsRouter = require("./routers/postsRouter");
const tagsRouter = require("./routers/tagsRouter");
const categoryRouter = require("./routers/categoryRouter");
const routeNotFoundMiddlware = require("./middlwares/routeNotFound");

const app = express();
app.use(express.json());

// Rotte per l'entità post
app.use("/posts", postsRouter);
// Rotte per l'entità tags
app.use("/tags", tagsRouter);
// Rotte per l'entità category
app.use("/categories", categoryRouter);

// Errore 404 - Pagina non trovata
app.use(routeNotFoundMiddlware);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port http://localhost:" + process.env.PORT);
});
