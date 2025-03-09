const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// data of users
const users = [
  {
    id: 1,
    username: "octocat",
    name: "The Octocat",
    repoCount: 8,
    location: "San Francisco",
  },
  {
    id: 2,
    username: "torvalds",
    name: "Linus Torvalds",
    repoCount: 25,
    location: "Portland",
  },
  {
    id: 3,
    username: "gaearon",
    name: "Dan Abramov",
    repoCount: 50,
    location: "London",
  },
  {
    id: 4,
    username: "addyosmani",
    name: "Addy Osmani",
    repoCount: 42,
    location: "Mountain View",
  },
  {
    id: 5,
    username: "tj",
    name: "TJ Holowaychuk",
    repoCount: 150,
    location: "Victoria",
  },
];

//Exercise 2: Get all users
function getAllUsers(users) {
  return { users: users };
}

app.get("/users", (req, res) => {
  try {
    let result = getAllUsers(users);
    res.status(200).json(result);
    if (!result) {
      res.status(404).json({ message: "No user data is found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Exercise 3: Get user by ID
function getById(id, users) {
  let user = users.find((user) => user.id === id);
  return { user: user };
}

app.get("/users/:id", (req, res) => {
  try {
    let { id } = req.params;
    let result = getById(parseInt(id), users);
    res.status(200).json(result);
    if (!result) {
      res.status(404).json({ message: "No user data is found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(3000, () => {
  console.log("Server is connected to the port no 3000");
});
