import { Todo } from "../src/types";

const generateRandomDate = () => {
  const today = new Date();
  const randomDays = Math.floor(Math.random() * 14); // Random number between 0 and 13
  const randomDate = new Date(today);
  randomDate.setDate(today.getDate() + randomDays);
  return `${randomDate.getFullYear()}-${randomDate.getMonth()}-${randomDate.getDate()}`;
};

const starWarsTodos: Todo[] = [
  {
    id: "defeat-darth-vader-1234",
    title: "Defeat Darth Vader",
    date: generateRandomDate(),
    description: "Confront and defeat Darth Vader in battle.",
  },
  {
    id: "train-with-yoda-5678",
    title: "Train with Yoda",
    date: generateRandomDate(),
    description: "Learn the ways of the Force from Master Yoda.",
  },
  {
    id: "rescue-princess-leia-9101",
    title: "Rescue Princess Leia",
  },
  {
    id: "destroy-the-death-star-1121",
    title: "Destroy the Death Star",
    date: generateRandomDate(),
    description: "Plan and execute the mission to destroy the Death Star.",
  },
  {
    id: "join-the-rebel-alliance-3141",
    title: "Join the Rebel Alliance",
    date: generateRandomDate(),
  },
  {
    id: "learn-the-ways-of-the-force-5161",
    title: "Learn the ways of the Force",
  },
  {
    id: "build-a-lightsaber-7181",
    title: "Build a lightsaber",
    date: generateRandomDate(),
    description: "Gather the necessary components and build your own lightsaber.",
  },
  {
    id: "escape-from-the-sarlacc-pit-9202",
    title: "Escape from the Sarlacc Pit",
    description: "Find a way to escape from the Sarlacc Pit.",
  },
  {
    id: "defeat-the-emperor-1222",
    title: "Defeat the Emperor",
    date: generateRandomDate(),
    description: "Confront and defeat Emperor Palpatine.",
  },
  {
    id: "free-han-solo-from-carbonite-3242",
    title: "Free Han Solo from Carbonite",
    date: generateRandomDate(),
  },
  {
    id: "find-the-hidden-rebel-base-5262",
    title: "Find the hidden Rebel base",
    date: generateRandomDate(),
  },
  {
    id: "negotiate-with-the-ewoks-7282",
    title: "Negotiate with the Ewoks",
    description: "Gain the trust and support of the Ewoks.",
  },
  {
    id: "repair-the-millennium-falcon-9303",
    title: "Repair the Millennium Falcon",
    date: generateRandomDate(),
    description: "Fix the damages and get the Millennium Falcon back in shape.",
  },
  {
    id: "infiltrate-the-death-star-1323",
    title: "Infiltrate the Death Star",
  },
  {
    id: "rescue-the-younglings-3343",
    title: "Rescue the younglings",
    date: generateRandomDate(),
  },
  {
    id: "defend-hoth-from-the-empire-5363",
    title: "Defend Hoth from the Empire",
    description: "Protect the Rebel base on Hoth from Imperial attack.",
  },
  {
    id: "retrieve-the-death-star-plans-7383",
    title: "Retrieve the Death Star plans",
    description: "Secure the plans for the Death Star.",
  },
  {
    id: "confront-kylo-ren-9404",
    title: "Confront Kylo Ren",
    date: generateRandomDate(),
    description: "Face Kylo Ren in battle.",
  },
  {
    id: "find-luke-skywalker-1424",
    title: "Find Luke Skywalker",
    date: generateRandomDate(),
    description: "Locate the missing Jedi, Luke Skywalker.",
  },
  {
    id: "learn-from-obi-wan-kenobi-3444",
    title: "Learn from Obi-Wan Kenobi",
    description: "Receive training from Obi-Wan Kenobi.",
  },
  {
    id: "escape-from-the-death-star-5464",
    title: "Escape from the Death Star",
    date: generateRandomDate(),
  },
  {
    id: "defeat-the-sith-7484",
    title: "Defeat the Sith",
    description: "Overcome the Sith Lords.",
  },
  {
    id: "protect-the-jedi-temple-9505",
    title: "Protect the Jedi Temple",
  },
  {
    id: "rescue-r2-d2-and-c-3po-1525",
    title: "Rescue R2-D2 and C-3PO",
    date: generateRandomDate(),
  },
  {
    id: "stop-the-trade-federation-3545",
    title: "Stop the Trade Federation",
    description: "Put an end to the Trade Federation's plans.",
  },
];

export default starWarsTodos;
