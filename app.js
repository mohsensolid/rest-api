var express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var auth = require('basic-auth');
var jwt = require('jwt-simple');
var cors = require('cors');

var app = express();
app.use(cors());

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 5000 ;

var db = mongoose.connect('mongodb://mohsen:mohsen@ds139715.mlab.com:39715/myfirstdb');
var Furit = require('./models/furit.js');
var Order = require('./models/orderModel.js');
var User = require('./models/userModels.js');
var UserRequest = require ('./models/userRequestModel.js');
var Message = require('./models/messageModels.js');



app.use(bodyParser.urlencoded({ extended :true}));
app.use(bodyParser.json());
app.use(cookieParser());

require('./config/passport.js')(app);

SignInRouter = require('./routes/SignInRouter.js')(User);
app.use('/api/users',SignInRouter);

app.get('/',function(req,res) {
    res.send('Hello To My Api');
});

userRequestRouter = require('./routes/UserRequestRouter.js')(UserRequest);
app.use('/api/request',userRequestRouter);



app.use(function(req, res, next) {

  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
        try {
    var decoded = jwt.decode(token, 'secret');
        req.decoded = decoded; 
            next();

  } catch (err) {
      res.json({ success: false, message: 'Failed to authenticate token.' });
    }
} 
else
{
    res.json({success:false,message:'Token not Provided!'});
}
});
UserRouter = require('./routes/UserRouter.js')(User);
app.use('/api/users',UserRouter);



furitRouter = require('./routes/FuritRouter.js')(Furit);
orderRouter = require('./routes/OrderRouter.js')(Order,User);
messageRouter = require('./routes/MessageRouter.js')(Message);


app.use('/api/furits',furitRouter);
app.use('/api/orders',orderRouter);
app.use('/api/messages',messageRouter);

io = require('./io/io.js')(io);
server.listen(port,function(){
    console.log('Server Start ON Port '+port);
});
