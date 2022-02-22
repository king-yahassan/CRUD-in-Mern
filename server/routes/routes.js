const router = require("express").Router() ; 
const userController = require("../controllers/controller")

router.post('/new-user', userController.newUser ) ;
router.get('/all-users' , userController.allUsers) ;
router.put('/update-user/:id' , userController.updateUser) ;
router.delete('/remove-user/:id' , userController.removeUser) ;

module.exports = router ;