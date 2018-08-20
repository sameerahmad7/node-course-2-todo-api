var mongoose=require('mongoose');

var User=mongoose.model('User',{
  email:{
    type:String,
    minlength:1,
    required:true,
    trime:true
  }
});

// var newUser=new User({
//   email:'s@g.com'
// });
//
// newUser.save().then((doc)=>{
//   console.log('Saved User',doc);
// },(e)=>{
//   console.log('Unable to save User');
// });

module.exports={User};
