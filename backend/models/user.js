const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        full_name: String,
        occupation: String,
        join_date: String,
    },
    {
        timestamps: true
    });



const User = mongoose.model("User", userSchema);
module.exports = User;