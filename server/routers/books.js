const express = require("express");
const uuid = require("uuid");
const route = express.Router();
const Books = require("../model/books");

//Give all Books data
route.get("/", async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    res.end("Error : " + err);
  }
});

//Give Selected Book data
route.get("/:id", async (req, res) => {
  try {
    const book = await Books.findOne({ id: req.params.id });
    res.json(book);
  } catch (err) {
    res.end("Error : " + err);
  }
});

//Create new Book
route.post("/", async (req, res) => {
  const book = new Books({
    id: uuid.v4(),
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    price: req.body.price
  });

  try {
    const newBookData = await book.save();
    res.json(newBookData);
  } catch (err) {
    res.send("Error: " + err);
  }
});

//Udadate Book

route.put("/:id", async (req, res) => {
  try {
    const book = await Books.findOne({ id: req.params.id });
    if (book) {
      book.name = req.body.name ? req.body.name : book.name;
      book.description = req.body.description
        ? req.body.description
        : book.description;
        book.imageUrl = req.body.imageUrl ? req.body.imageUrl : book.imageUrl;
      book.price = req.body.price ? req.body.price : book.description;
      book.available = req.body.available ? req.body.available : book.available;
      const updatedBook = await book.save();
      res.json(updatedBook);
    }
  } catch (err) {
    res.send("Error :" + err);
  }
});

//Delete Book
route.delete("/:id", async (req, res) => {
  try {
    await Books.deleteOne({ id: req.params.id });
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    res.send("Error : " + err);
  }

});

module.exports = route;
