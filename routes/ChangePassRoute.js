var express = require('express');
var ChangePassRouter = express.Router();

var route = function(User){
    ChangePassRouter.use('/',function(req,res,next){
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
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
    ChangePassRouter.route('/')
    .patch(function(req,res){
        if(req.body._id)
            delete req.body._id;
      if(req.body.OldPass == req.user.Password){
        req.user.Password = req.body.NewPass;
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
    return ChangePassRouter;
    };
    module.exports = route;
