const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// internal api
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
// grabs info for indivdual books
// 
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
