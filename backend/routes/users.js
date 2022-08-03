const router = require('express').Router();
const userQueries = require('../controllers/services/user-queries');

router.get('/users/getusers', async (req, res) =>
{
    res.json(await userQueries.getAllUsers());

});

router.get('/users/getnumberofusers', async (req, res) =>
{
    res.json(await userQueries.getNumberOfUsers());

});

router.get('/users/getnumberofuserstoday', async (req, res) =>
{
    res.json(await userQueries.getNumberOfUsersToday());

});
router.post('/users/filteredusers', async (req, res) =>
{
    res.json(await userQueries.getFilteredUsers(req.body));

});

router.post('/users/adduser', async (req, res) =>
{

    res.json(await userQueries.addUser(req.body));

});


router.post('/users/deleteuser', async (req, res) =>
{
    res.json(await userQueries.deleteUser(req.body.id));

});

router.post('/users/getuser', async (req, res) =>
{
    res.json(await userQueries.getUserById(req.body.id));

});

router.post('/users/updateuser', async (req, res) =>
{
    console.log("Usuario: ")
    console.log(req.body)
    res.json(await userQueries.updateUser(req.body));

});


module.exports = router;