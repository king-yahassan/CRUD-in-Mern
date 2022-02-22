const User = require("../models/user.model")


module.exports.newUser = async (req, res) =>{
    const { firstname , lastname ,email } = req.body ;

    try {
        const user = await User.create({firstname,lastname,email});
        res.status(201).json(`user added ${user}`)

    }
    catch(err){
        res.status(500).json(`message ${err}`)
    }
}

module.exports.allUsers = async (req, res) => {
    try{
        const users = await User.find() ;
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(`message : ${err}`)
    }
}


module.exports.updateUser = async (req , res) => {
    try{
        await User.findByIdAndUpdate(
            {_id : req.params.id} ,
            {
                $set: {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                }
            },
            { new : true},
            (err, data) => {
                (!err)? res.status(200).json(data) : res.status(500).json(`message : ${err}`)
            }
        )
    } catch (err) {
        res.status(500).send({ message: err });
      }
}

module.exports.removeUser = async (req, res) => {
    await User.remove({_id : req.params.id}).exec();
    res.status(200).send("user deleted") 
}
