const express = require("express");
const helmet = require("helmet");
const db = require("../data/dbConfig");
const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`<h2>I AM SERVER</h2>`);
});

server.get("/api/cars", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "something went wrong" });
    });
});

server.get("/api/cars/:id", (req, res) => {
  db("cars")
    .where("id", req.params.id)
    .first()
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "something went wrong" });
    });
});

server.post("/api/cars", (req, res) => {
  db("cars")
    .insert(req.body)
    .then(account => {
      res.status(201).json(account);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "mistakes were made" });
    });
});

server.put("/api/cars/:id", (req, res) => {
  const edit = req.body;

  db("cars")
    .where("id", req.params.id)
    .update(edit)
    .then(edited => {
      res.status(200).json(edited);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "car didn't update" });
    });
});

server.delete("/api/cars/:id", (req, res) => {
  db("cars")
    .where("id", req.params.id)
    .delete()
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "did not delete" });
    });
});

module.exports = server;
