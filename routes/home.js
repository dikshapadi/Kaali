const express = require("express");
const router = express.Router();
const Contact = require("../models/contactUs.js");

router.get("/", (req,res) => {
	res.render("home/kaalihome");
});

router.get("/home/aboutUs",(req,res) => {
	res.render("home/aboutUs");
});
router.get("/home/contactUs",(req,res) => {
	res.render("home/contactUs");
});

router.post("/home/contactUs", async (req,res) => {
    try
    {
        const review = req.body.review;
        const newContact = new Contact(review);
        await newContact.save();
        req.flash("success", "Your reply has been sent successfully");
        res.redirect("/home/contactUs")
    }
    catch(err)
	{
		console.log(err);
		req.flash("error", "Some error occurred on the server.")
		res.redirect("back");
	}
});
router.get("/home/gallery",(req,res) => {
	res.render("home/gallery");
});

router.get("/home/blog",(req,res) => {
	res.render("home/blog");
});

router.get("/home/blog1",(req,res) => {
	res.render("home/blog1");
});

router.get("/home/blog2",(req,res) => {
	res.render("home/blog2");
});

router.get("/home/blog3",(req,res) => {
	res.render("home/blog3");
});

router.get("/home/blog4",(req,res) => {
	res.render("home/blog4");
});

router.get("/home/blog5",(req,res) => {
	res.render("home/blog5");
});

router.get("/home/blog6",(req,res) => {
	res.render("home/blog6");
});

router.get("/home/shelter",(req,res) => {
	res.render("home/shelter");
});

router.get("/home/andhra",(req,res) => {
	res.render("home/andhra");
});
router.get("/home/aruna",(req,res) => {
	res.render("home/aruna");
});
router.get("/home/assam",(req,res) => {
	res.render("home/assam");
});
router.get("/home/bih",(req,res) => {
	res.render("home/bih");
});
router.get("/home/chatt",(req,res) => {
	res.render("home/chatt");
});
router.get("/home/goa",(req,res) => {
	res.render("home/goa");
});
router.get("/home/guj",(req,res) => {
	res.render("home/guj");
});
router.get("/home/hary",(req,res) => {
	res.render("home/hary");
});
router.get("/home/hima",(req,res) => {
	res.render("home/hima");
});
router.get("/home/jhar",(req,res) => {
	res.render("home/jhar");
});
router.get("/home/banga",(req,res) => {
	res.render("home/banga");
});
router.get("/home/kerala",(req,res) => {
	res.render("home/kerala");
});
router.get("/home/madhyap",(req,res) => {
	res.render("home/madhyap");
});
router.get("/home/maha",(req,res) => {
	res.render("home/maha");
});
router.get("/home/mani",(req,res) => {
	res.render("home/mani");
});
router.get("/home/megh",(req,res) => {
	res.render("home/megh");
});
router.get("/home/mizoram",(req,res) => {
	res.render("home/mizoram");
});
router.get("/home/naga",(req,res) => {
	res.render("home/naga");
});
router.get("/home/1",(req,res) => {
	res.render("home/1");
});
router.get("/home/2",(req,res) => {
	res.render("home/2");
});
router.get("/home/3",(req,res) => {
	res.render("home/3");
});
router.get("/home/4",(req,res) => {
	res.render("home/4");
});
router.get("/home/5",(req,res) => {
	res.render("home/5");
});
router.get("/home/6",(req,res) => {
	res.render("home/6");
});
router.get("/home/7",(req,res) => {
	res.render("home/7");
});
router.get("/home/8",(req,res) => {
	res.render("home/8");
});
router.get("/home/9",(req,res) => {
	res.render("home/9");
});
router.get("/home/10",(req,res) => {
	res.render("home/10");
});

router.get("/home/map",(req,res) => {
	res.render("home/map");
});
module.exports = router;