const express = require("express");
const router = express.Router();

// Home
router.get("/", (request, response) => {
    response.render("index.ejs", {page: "index"});
});

module.exports = router;