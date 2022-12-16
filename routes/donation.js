const express = require("express");
const router = express.Router();

router.get("/donations/donation",(req,res) => {
	res.render("donations/donation");
});

router.get("/donations/offline",(req,res) => {
	res.render("donations/offline");
});

router.get("/donations/cheque",(req,res) => {
	res.render("donations/cheque");
});

module.exports = router;