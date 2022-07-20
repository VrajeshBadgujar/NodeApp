const express = require("express")
const path    = require("path")
const app = express();
require("./db/conn")
const User = require("./models/usermesage")
const port = process.env.PORT || 8000
const hbs = require("hbs");
const { ajax } = require("jquery");

// setting the path
const staticpath  = path.join(__dirname, "../public" )
const templatespath  = path.join(__dirname, "../templates/views" )
const partialspath  = path.join(__dirname, "../templates/partials" )

// middleware

app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")))

app.use(express.urlencoded({extended: false}))
app.use(express.static(staticpath))
app.set("view engine", "hbs")
app.set("views", templatespath)
app.set(hbs.registerPartials(partialspath))


// routing

app.get("/", (req, res)=>{
    res.render("home")
})

app.post("/contact", async(req, res)=>{
    try {
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("home")
    } catch (error) {
        res.status(500).send(error)
    }
})



// server create
app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
})