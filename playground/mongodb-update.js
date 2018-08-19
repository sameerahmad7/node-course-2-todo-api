// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
  return  console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

db.collection('Todos').findOneAndUpdate({
  _id:new ObjectID('5b796f387da1fca33a828bb7')
},{
  $set:{
    completed:true
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});
//   db.close();
 });
