import express from "express";
import {
  createBook,
  deleteBook,
  getBooks,
  getFreeBooks,
  updateBook,
} from "../controller/book.controller.js";

const router = express();

router.get("/fetch", getBooks);
router.get("/free", getFreeBooks);
router.post("/create", createBook);
router.put("/update", updateBook);
router.delete("/delete", deleteBook);
export default router;
