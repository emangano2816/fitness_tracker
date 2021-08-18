const router = require("express").Router();

//GET fitness tracker link
router.get("/", (req, res) => {
    res.render("index");
});

//GET Dashboard 
router.get("/stats", (req, res) => {
    res.render("stats")
});

module.exports = router;