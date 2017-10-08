var express = require('express');
var bcrypt = require('bcryptjs');

var UserRouterRouter = express.Router();

var route = function(User){
    var cuserController = require('../controllers/userControllers.js')(User);
    UserRouterRouter.use('/',function(req,res,next){
    var query = {};
    User.findOne({User_Name:req.decoded.User_Name},function(err,user){
            
            if(err)
            {
            res.status(500).send(err);
            }else if (user)
            {
                req.user = user;
                 next();
            }
            else{
            res.status(404).send('user not Found !!');
            }
          
        });
    });
    UserRouterRouter.route('/')
    .patch(function(req,res){
        if(req.body._id)
            delete req.body._id;
      if( bcrypt.compareSync(req.body.OldPass, req.user.Password)){
        var hash = bcrypt.hashSync(req.body.NewPass, 8);
        req.user.Password =hash;
            // for(var p in req.body)
    //     {
    //         req.user[p] = req.body[p];
    //     }
        req.user.save(function(err){
            if(err)
            {
                res.status(500).send(err);
            }
            else{
                   
                res.json(req.user);
            }
        });
    }else{
        res.status(402).send('Not Match !!');
        
    }

    });
    UserRouterRouter.use(function(req,res,next){
        if(req.decoded.Admin)
            {  
                next();
            }
           else
           {
              res.json([]);
           }
   });
usersRouter.route('/:id')
    .get(function(req,res){
    res.json(req.user);

 .patch(function(req,res){
   if(req.body._id)
       delete req.body._id;
       if(req.body.Password)
       delete req.body.Password;
      if(req.body.User_Name)
       delete req.body.User_Name;
for(var p in req.body)
    {
         req.user[p] = req.body[p];
     }
     req.user.save(function(err){
        if(err)
         {
            res.status(500).send(err);
         }
        else{
                 
         res.json(req.user);
      }
  });
});
   UserRouterRouter.route('/')
.post(cuserController.post)
.get(cuserController.get);
    return UserRouterRouter;
    };
    module.exports = route;
