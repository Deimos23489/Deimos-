import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Servidor corriendo correctamente 🚀");
});
app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor en ejecución en http://localhost:3000");
});
