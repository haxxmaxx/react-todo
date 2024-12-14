import express from "express";
import cors from "cors";
// import starWarsData from "../data/star-wars-data.ts";

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

const state = {};

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/todos", (req, res) => {
  res.send(Object.values(state));
});

app.get("/todos/:id", (req, res) => {
  res.send(state[req.params.id]);
});

app.post("/todos", (req, res) => {
  const todoId = req.body.id;
  state[todoId] = req.body;
  res.send("null");
  res.status(201).end();
});

app.patch("/todos", (req, res) => {
  const todosToRemove = req.body;
  const todosIdArray = Object.keys(todosToRemove);
  todosIdArray.forEach((todoId) => {
    delete state[todoId];
  });
  console.log(state);
  res.send("null");
  res.status(201).end();
});
