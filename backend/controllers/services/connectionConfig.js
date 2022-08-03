const mongoose = require('mongoose');
const uri = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_CLUSTER + "/?retryWrites=true&w=majority";
const connect = async () =>
{
    return await mongoose.connect(uri);
};
const disconnect = async () =>
{
    return await mongoose.disconnect();
};

module.exports = { connect, disconnect };