const router = require("express").Router();
const externalRoutes = require("./externalRoutes");

// const bookRoutes = require("./books");
// // Book routes
// router.use("/books", bookRoutes);

// External API Routes
router.use("/externalRoutes",externalRoutes)

module.exports = router;
