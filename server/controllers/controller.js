const User = require("../models/user.model")

// add a new user
module.exports.newUser = async (req, res) => {
    const { firstname, lastname, email } = req.body;

    try {
        const user = await User.create({ firstname, lastname, email });
        res.status(201).json(`user added ${user}`)

    }
    catch (err) {
        res.status(500).json(`message ${err}`)
    }
}
// view all users
module.exports.allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json(`message : ${err}`)
    }
}
// show an user
module.exports.showUser = async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json(`message : ${err}`)
    }
}


// update user
module.exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                }
            },
            { new: true });

        res.status(200).json({ message: "Update Successfully", user })

    } catch (err) {
        res.status(500).send({ message: err });
    }
}

//delete user
module.exports.removeUser = async (req, res) => {
    await User.remove({ _id: req.params.id }).exec();
    res.status(200).send("user deleted")
}
