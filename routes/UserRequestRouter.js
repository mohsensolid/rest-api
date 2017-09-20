var express = require('express');
var userRequestRouter = express.Router();

var route = function(UserRequest){
var cuserRequestController = require('../controllers/UserRequestControllers.js')(UserRequest);

userRequestRouter.route('/')
.post(cuserRequestController.post);

userRequestRouter.route('/')
.get(cuserRequestController.get);
userRequestRouter.route('/:id')
.delete(function(req,res){
    UserRequest.remove( {"_id": req.params.id} ,function(err,orders){
        if(err)
        {
        res.status(500).send(err);
        }else
        {
        res.json(orders);
        }
    });
});
return userRequestRouter;
};
module.exports = route;
