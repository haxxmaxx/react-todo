import express from "express";
import cors from "cors";
// import starWarsData from "../data/star-wars-data.ts";

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

const generateRandomDate = () => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 14); // Random number between 0 and 13
  const randomDate = new Date(today);
  randomDate.setDate(today.getDate() + randomDays);
  return `${randomDate.getFullYear()}-${randomDate.getMonth()}-${randomDate.getDate()}`;
};

const generateRandomDateCreated = () => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 14); // Random number between 0 and 13
  const randomDate = new Date(today);
  randomDate.setDate(today.getDate() + randomDays);
  return randomDate;
};

const starWarsTodos = [
  {
    id: "defeat-darth-vader-1234",
    creationDate: generateRandomDateCreated(),
    title: "Defeat Darth Vader",
    date: generateRandomDate(),
    description: "Confront and defeat Darth Vader in battle.",
  },
  {
    id: "train-with-yoda-5678",
    creationDate: generateRandomDateCreated(),
    title: "Train with Yoda",
    date: generateRandomDate(),
    description: "Learn the ways of the Force from Master Yoda.",
  },
  {
    id: "rescue-princess-leia-9101",
    creationDate: generateRandomDateCreated(),
    title: "Rescue Princess Leia",
  },
  {
    id: "destroy-the-death-star-1121",
    creationDate: generateRandomDateCreated(),
    title: "Destroy the Death Star",
    date: generateRandomDate(),
    description: "Plan and execute the mission to destroy the Death Star.",
  },
  {
    id: "join-the-rebel-alliance-3141",
    creationDate: generateRandomDateCreated(),
    title: "Join the Rebel Alliance",
    date: generateRandomDate(),
  },
  {
    id: "learn-the-ways-of-the-force-5161",
    creationDate: generateRandomDateCreated(),
    title: "Learn the ways of the Force",
  },
  {
    id: "build-a-lightsaber-7181",
    creationDate: generateRandomDateCreated(),
    title: "Build a lightsaber",
    date: generateRandomDate(),
    description: "Gather the necessary components and build your own lightsaber.",
  },
  {
    id: "escape-from-the-sarlacc-pit-9202",
    creationDate: generateRandomDateCreated(),
    title: "Escape from the Sarlacc Pit",
    description: "Find a way to escape from the Sarlacc Pit.",
  },
  {
    id: "defeat-the-emperor-1222",
    creationDate: generateRandomDateCreated(),
    title: "Defeat the Emperor",
    date: generateRandomDate(),
    description: "Confront and defeat Emperor Palpatine.",
  },
  {
    id: "free-han-solo-from-carbonite-3242",
    creationDate: generateRandomDateCreated(),
    title: "Free Han Solo from Carbonite",
    date: generateRandomDate(),
  },
  {
    id: "find-the-hidden-rebel-base-5262",
    creationDate: generateRandomDateCreated(),
    title: "Find the hidden Rebel base",
    date: generateRandomDate(),
  },
  {
    id: "negotiate-with-the-ewoks-7282",
    creationDate: generateRandomDateCreated(),
    title: "Negotiate with the Ewoks",
    description: "Gain the trust and support of the Ewoks.",
  },
  {
    id: "repair-the-millennium-falcon-9303",
    creationDate: generateRandomDateCreated(),
    title: "Repair the Millennium Falcon",
    date: generateRandomDate(),
    description: "Fix the damages and get the Millennium Falcon back in shape.",
  },
  {
    id: "infiltrate-the-death-star-1323",
    creationDate: generateRandomDateCreated(),
    title: "Infiltrate the Death Star",
  },
  {
    id: "rescue-the-younglings-3343",
    creationDate: generateRandomDateCreated(),
    title: "Rescue the younglings",
    date: generateRandomDate(),
  },
  {
    id: "defend-hoth-from-the-empire-5363",
    creationDate: generateRandomDateCreated(),
    title: "Defend Hoth from the Empire",
    description: "Protect the Rebel base on Hoth from Imperial attack.",
  },
  {
    id: "retrieve-the-death-star-plans-7383",
    creationDate: generateRandomDateCreated(),
    title: "Retrieve the Death Star plans",
    description: "Secure the plans for the Death Star.",
  },
  {
    id: "confront-kylo-ren-9404",
    creationDate: generateRandomDateCreated(),
    title: "Confront Kylo Ren",
    date: generateRandomDate(),
    description: "Face Kylo Ren in battle.",
  },
  {
    id: "find-luke-skywalker-1424",
    creationDate: generateRandomDateCreated(),
    title: "Find Luke Skywalker",
    date: generateRandomDate(),
    description: "Locate the missing Jedi, Luke Skywalker.",
  },
  {
    id: "learn-from-obi-wan-kenobi-3444",
    creationDate: generateRandomDateCreated(),
    title: "Learn from Obi-Wan Kenobi",
    description: "Receive training from Obi-Wan Kenobi.",
  },
  {
    id: "escape-from-the-death-star-5464",
    creationDate: generateRandomDateCreated(),
    title: "Escape from the Death Star",
    date: generateRandomDate(),
  },
  {
    id: "defeat-the-sith-7484",
    creationDate: generateRandomDateCreated(),
    title: "Defeat the Sith",
    description: "Overcome the Sith Lords.",
  },
  {
    id: "protect-the-jedi-temple-9505",
    creationDate: generateRandomDateCreated(),
    title: "Protect the Jedi Temple",
  },
  {
    id: "rescue-r2-d2-and-c-3po-1525",
    creationDate: generateRandomDateCreated(),
    title: "Rescue R2-D2 and C-3PO",
    date: generateRandomDate(),
  },
  {
    id: "stop-the-trade-federation-3545",
    creationDate: generateRandomDateCreated(),
    title: "Stop the Trade Federation",
    description: "Put an end to the Trade Federation's plans.",
  },
];

const state = {};

for (let index = 0; index < starWarsTodos.length; index++) {
  const element = starWarsTodos[index];
  state[element.id] = element;
}

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

app.put("/todos/:id", (req, res) => {
  const todoId = req.body.id;
  console.log({ state, todoId });
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
  res.send("null");
  res.status(201).end();
});
