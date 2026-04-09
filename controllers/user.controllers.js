const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const ejs = require("ejs");

// Create a transporter for sending emails
// const transporter = nodemailer.createTransporter({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
// });


const postSignUp = (req, res) => {
    
    let salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(req.body.password, salt);
    let hashedConfirmPassword = bcrypt.hashSync(req.body.confirmPassword, salt);

    //Overwrite the plain text password with the hashed password
    req.body.password = hashedPassword;
    req.body.confirmPassword = hashedConfirmPassword;

    const user = req.body;

    const newUser = new User(user);
    newUser.save()
        .then((user) => {
            newUser.password = hashedPassword;
            newUser.confirmPassword = hashedConfirmPassword;
            console.log("User saved to DB:", user);
            res.redirect("/users/login");
            // res.send("You have successfully registered");
        })
        .catch((error) => {
            console.error("Error saving DB:", error);
            res.status(500).send("Error:" + error.message);
        });
}


const getDashboard = (req, res) => {
    res.render("dashboard");
}


const getSignUp = (req, res) => {
    res.render("SignUp");
}

const getSignin = (req, res) => {
    res.render("SignIn");
} 


const postSignup = (req, res) => {
    const user = req.body;
    
    const newCustomer = new Customer(user);

    newCustomer.save()
        .then((user) => {
            console.log("Customer saved:", user);
            res.redirect("/user/signin");
        })
        .catch((err) => {
            console.error("Error saving to DB:", err);
            res.status(500).send("Error: " + err.message);
        });
}


const postSignin = (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email })
        .then((foundCustomers) => {
            if (!foundCustomers) {
                console.log("Invalid email");
                return res.status(400).json({message: "Invalid email or password"})
            } 

            // compare the provided password with the hashed password in the database
            // const isMatch = bcrypt.compareSync(password, foundCustomers.password);
            // if (!isMatch) {
            //     console.log("Invalid Password");
            //     return res.status(400).json({ message: "Invalid email or password"});
            // }


            // if (foundCustomers.password !== password) {
            //     console.log("Invalid Password");
            //     return res.status(400).json({ message: "Invalid email or password"});
            // }


            // Success
            console.log("Login Successful for", foundCustomers.email);


            res.redirect("/users/dashboard");



            
        })
        .catch((err) => {
            console.error("Error during signin:", err);
            res.status(500).send("Internal server error");
        });
}




module.exports = { postSignUp, getSignUp, postSignin, getSignin, getDashboard }