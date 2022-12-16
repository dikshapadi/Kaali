const express = require('express')
const app = express()
const flash = require("connect-flash");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const homeRoutes = require("./routes/home.js");
const volunteerRoutes = require("./routes/volunteer.js");
const donationRoutes = require("./routes/donation.js");
const dotenv = require('dotenv')
const connectDB = require('./config/db')
dotenv.config({path: './config/config.env'})
connectDB()

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use("/assets", express.static(__dirname + "/assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
	secret: "secret",
	resave: true,
	saveUninitialized: true
}));
app.use(flash());
app.use((req, res, next) => {
    res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	res.locals.warning = req.flash("warning");
	next();
});

//Routes
app.use(volunteerRoutes)
app.use(homeRoutes)
app.use(donationRoutes)

const PORT = process.env.PORT || 5100
app.listen(PORT, console.log(`Server is running on port ${PORT}`))
