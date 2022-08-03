const connection = require('./connectionConfig');
const User = require('../../models/user');
const { MongoExpiredSessionError, ObjectId } = require('mongodb');
const { findById, db } = require('../../models/user');
const dateController = require('../dateController');



const getAllUsers = async () =>
{
    await connection.connect();
    const user = await User.find();
    connection.disconnect();
    return user;
};

const getNumberOfUsers = async () =>
{
    await connection.connect();
    const count = await User.find().count();
    connection.disconnect();
    return count;

};
const getNumberOfUsersToday = async () =>
{
    const todayStart = dateController.getformattedMidnightDate(new Date(), 0, 0);
    let todayEnd = dateController.getformattedMidnightDate(new Date(), 1, 1);
    console.log(todayStart);
    console.log(todayEnd);

    await connection.connect();
    const count = await User.find({
        createdAt: {
            $gte: todayStart,
            $lte: todayEnd
        }
    }).count();
    connection.disconnect();
    return count;

};
const getUserById = async (id) =>
{
    try
    {
        await connection.connect();
        const user = await User.findById(id);
        console.log(user);
        return user;
    } catch (e)
    {
        if (new MongoExpiredSessionError)
        {
            console.log("MongoExpiredSessionError");
        }
    } finally
    {
        connection.disconnect();
    }

};

const deleteUser = async (id) =>
{
    try
    {
        await connection.connect();
        let message;
        await User.findByIdAndDelete(id).then((done, err) =>
        {
            if (!err)
            {
                message = "User " + done + " deleted";
            }

        });
        return message;
    } catch (e)
    {
        console.log(e);
    } finally
    {
        connection.disconnect();
    }
};

const updateUser = async (user) =>
{

    try
    {
        console.log(user);
        await connection.connect();
        var message;
        await User.findByIdAndUpdate(user._id,
            {
                full_name: user.full_name,
                occupation: user.occupation,
                join_date: user.join_date,
                updatedAt: dateController.getformattedDate(new Date(), 0)
            }).then((done, err) =>
            {
                if (!err)
                {
                    message = done;
                }
            });
    } catch (e)
    {
        console.log(e);
    } finally
    {
        connection.disconnect();
    }
    return message;

};

const addUser = async (user) =>
{
    const date = dateController.getformattedDate(new Date(), 0);
    console.log(user);
    try
    {
        console.log(user);
        await connection.connect();
        var message;

        const newUser = new User({
            full_name: user.full_name,
            occupation: user.occupation,
            join_date: user.join_date,
            createdAt: date,
            updatedAt: date,
            __v: 0,
        });
        await newUser.save();
        message = newUser;
    } catch (e)
    {
        console.log(e);
    } finally
    {
        connection.disconnect();
    }
    console.log(message);
    return message;

};

const getFilteredUsers = async (params) =>
{
    try
    {
        await connection.connect();
        console.log(params);

        let param;


        /*
              The ID Filter is unused
          if (params.selectFilter == "ID" && ObjectId.isValid(params.inputFilter))
              {
                  param = { _id: { $regex: new RegExp(params.inputFilter, 'i') } };
              } else */
        if (params.selectFilter == "Full Name")
        {
            param = { full_name: { $regex: new RegExp(params.inputFilter, 'i') } };
        } else if (params.selectFilter == "Occupation")
        {
            param = { occupation: { $regex: new RegExp(params.inputFilter, 'i') } };
        } else
        {
            param = null;
        }
        var message;
        if (param != null)
        {
            await User.find(param).then((done, err) =>
            {
                if (!err)
                {
                    message = done;
                }

            });


        }

        if (param == null || message.length === 0)
        {
            message = { error: "No hay usuarios que coincidan con esta búsqueda" };
        }


    } catch (e)
    {
        console.log(e);
    } finally
    {
        connection.disconnect();
    }
    console.log(message);
    return message;

};



module.exports = { getAllUsers, getNumberOfUsers, getNumberOfUsersToday, getUserById, getFilteredUsers, deleteUser, updateUser, addUser };
