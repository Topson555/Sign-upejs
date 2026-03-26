const express = require("express")
const app = express();
const Port = 2121;
const ejs = require("ejs")
const cors = require("cors")

const Users=[]

app.use(cors());
app.set("view engine","ejs");
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/SignIn", (req, res) => {
    res.render("SignIn")
})
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})

app.get("/SignUp", (req, res) => {
    res.render("SignUp")
})

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})

app.post("/register", (req, res) => {
    const user = req.body;
    Users.push(user);
    console.log('Current users:', Users);
    res.send("You have successfully registered")
})

app.post("/SignUp", (req, res) => {
    res.render("SignUp")
})

