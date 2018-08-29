const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/Todo');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });



// Todo.findOneAndRemove({_id:'5b86cb037da1fca33a829334'}).then((todo)=>{
//
// });

// Todo.findByIdAndRemove('5b86cb037da1fca33a829334').then((todo)=>{
//   console.log(todo);
// });
