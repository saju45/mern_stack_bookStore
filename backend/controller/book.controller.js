import Book from "../models/book.model.js";
export const getBooks = async (req, res) => {
  try {
    // Fetching books from the database
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getFreeBooks = async (req, res) => {
  try {
    // Fetching books from the database
    const books = await Book.find({ category: "free" });

    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getBookById = async (req, res) => {
  try {
    // Fetching book by id from the database
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createBook = async (req, res) => {
  try {
    // Creating a new book document in the database
    const newBook = new Book(req.body);
    await newBook.save();

    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateBook = async (req, res) => {
  try {
    // Fetching book by id from the database
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });

    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    // Fetching book by id from the database
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const searchBooks = async (req, res) => {
  try {
    // Searching books by title or author from the database
    const regex = new RegExp(req.query.q, "gi");
    const books = await Book.find({
      $or: [{ title: regex }, { author: regex }],
    });

    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
