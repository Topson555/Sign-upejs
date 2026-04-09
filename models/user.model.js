const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique:[true,"Email has been taken, please choose another one"]},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true}
});

const Customer = mongoose.model('User', usersSchema);

module.exports = Customer;