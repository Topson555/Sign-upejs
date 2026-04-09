const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user.routes');
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
    res.render('SignUp');
});
 
app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




app.use(cors());
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true}))


