var express = require('express');
var SignInRouter = express.Router();
var passport = require('passport');
var jwt = require('jwt-simple');
  var usera;
var route = function(User){
    
SignInRouter.route('/signin') 
 .post(passport.authenticate('local',{
       
    }),function(req,res) {
        // res.json(req.body);
            var user = User(req.user);
         
            var tokenparameter = {
                // _id:user._id,
                User_Name:user.User_Name,
                Admin:user.Admin
            };
             
                //    console.log(user);
                        var token = jwt.encode(tokenparameter, 'secret');
                                    res.json({access_token :token,
                                        _id:user._id
                                    });

                                        });
 


// SignInRouter.route('/signUp')
// .post(cuserController.post);
// .get(cuserController.get);



// usersRouter.use('/:id',function(req,res,next){
//     var token = req.body.token || req.query.token || req.headers['x-access-token'];
// var query = {};
//      User.findOne({User_Name:req.params.id},function(err,user){
        
//         if(err)
//         {
//         res.status(500).send(err);
//         }else if (user )
//         {
//             req.user = user;
//              next();
//         }
//         else{
//         res.status(404).send('user not Found !!');
//         }
      
//     });
// });
// // usersRouter.use(function(req,res,next){
// //     if(req.decoded.Admin)
// //         {  
// //             next();
// //         }
// //        else
// //        {
// //            res.json([]);
// //        }
// // });
// usersRouter.route('/:id')
// .get(function(req,res){
//     res.json(req.user);
// });
// .patch(function(req,res){
//     if(req.body._id)
//         delete req.body._id;
// for(var p in req.body)
//     {
//         req.user[p] = req.body[p];
//     }
//     req.user.save(function(err){
//         if(err)
//         {
//             res.status(500).send(err);
//         }
//         else{
               
//             res.json(req.user);
//         }
//     });
// });


                                           //     req.login(req.body,function() {
          
    // });


//  function(err, user) {
    //     req.login(req.body,function() {
          
    // });


//  function(err, user) {
    
//                     if(err)
//                     {
//                        console.log(err); 
//                     }
//                     else
//                     {
//                         usera=user;
//                       console.log(user); 
//                     }
                
                    
 
//   }),function(req,res){
//       res.send('hi');
//       console.log(user); 
//   }) ;

   

return SignInRouter;
};
module.exports = route;