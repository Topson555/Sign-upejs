// const express = require("express")
// const app = express();
// const Port = 2121;
// const ejs = require("ejs")
// const cors = require("cors")

// const Users=[]

// app.use(cors());
// app.set("view engine","ejs");
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))


// app.get("/SignIn", (req, res) => {
//     res.render("SignIn")
// })
// app.listen(Port, () => {
//     console.log(`Server is running on port ${Port}`)
// })

// app.get("/SignUp", (req, res) => {
//     res.render("SignUp")
// })

// app.listen(Port, () => {
//     console.log(`Server is running on port ${Port}`)
// })

// app.post("/register", (req, res) => {
//     const user = req.body;
//     Users.push(user);
//     console.log('Current users:', Users);
//     res.send("You have successfully registered")
// })

// app.post("/SignUp", (req, res) => {
//     res.render("SignUp")
// })




const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'ejs');
const Users=[]
const port = process.env.port ;
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
app.get('/', (req, res) => {
    res.render('signUp');
});
const usersSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});
const User = mongoose.model('User', usersSchema);
app.post('/register', (req, res) => {
    try{
        const newUser= new User(req.body);
        newUser.save()
            console.log("User saved:",User);
            res.send('You have been registered successfully!');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

