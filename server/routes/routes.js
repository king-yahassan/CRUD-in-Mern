const router = require("express").Router() ; 
const userController = require("../controllers/controller")

router.post('/new-user', userController.newUser ) ;
router.get('/all-users' , userController.allUsers) ;
router.get('/show-user/:id', userController.showUser)
router.put('/update-user/:id' , userController.updateUser) ;
router.delete('/delete-user/:id' , userController.removeUser) ;

module.exports = router ;