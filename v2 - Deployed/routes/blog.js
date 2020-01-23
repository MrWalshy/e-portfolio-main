const express = require("express");
const router = express.Router();

// Blog
router.get("/blog", (request, response) => {
    response.render("blog.ejs");
});

module.exports = router;