var bcrypt = require('bcryptjs')

var UserController = function(User){
    var get = function(req,res){
    var query = {};
 
    User.find(function(err,users){
        if(err)
        {
        res.status(500).send(err);
        }else
        {
        res.json(users);
        }
    });
   
};
    var post = function(req,res){
    var user = User(req.body);
    
    User.findOne({'User_Name':user.User_Name} ,function(err,result){
        if(err)
        {
        res.status(500).send(err);
        }else
        {
       if(!result){
        var hash = bcrypt.hashSync(user.Password, 8);
        user.Password=hash;
        user.Admin=false;    
        user.save();
        res.status(201).send(user);
       }else{
        res.status(404).send("کاربری با این نام هست");
              }

        }
    });
  
};
    return{
        post:post,
        get:get
    };
};
module.exports = UserController;