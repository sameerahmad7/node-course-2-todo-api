const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/Todo');

var id='5b7ad9ed4f0fe3fc35e57c8b';

if(!ObjectID.isValid(id))
{
  console.log('Invalid id');
}

 // Todo.find({
 //   _id:id
 // }).then((todos)=>{
 //   console.log('Todos',todos);
 // });
 //
 // Todo.findOne({
 //   _id:id
 // }).then((todo)=>{
 //   console.log('Todo',todo);
 // });

 Todo.findById(id).then((todo)=>{
   if(!todo)
   {
     return console.log('Id not found');
   }
   console.log('Todo by id',todo);
 }).catch((e)=>console.log(e));
