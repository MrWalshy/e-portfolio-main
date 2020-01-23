const express = require("express");
const router = express.Router();

// Projects
router.get("/projects", (request, response) => {
    response.render("projects.ejs", {page: "project"});
});

module.exports = router;