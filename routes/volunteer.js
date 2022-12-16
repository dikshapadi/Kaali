const express = require('express')
const router = express.Router()
const Volunteer = require("../models/volunteer.js");

router.get("/volunteerReq/volunteer", (req,res) => {
	res.render("volunteerReq/volunteer");
});

router.get("/volunteerReq/registerVol", (req,res) => {
	res.render("volunteerReq/registerVol");
});

router.post("/volunteerReq/registerVol", async (req,res) => {
    try
    {
        const volunteer = req.body.volunteer;
        const newVolunteer = new Volunteer(volunteer);
        await newVolunteer.save();
        req.flash("success", "Volunteer request sent successfully");
        res.redirect("/volunteerReq/registerVol")
    }
    catch(err)
	{
		console.log(err);
		req.flash("error", "Some error occurred on the server.")
		res.redirect("back");
	}
});

module.exports = router;