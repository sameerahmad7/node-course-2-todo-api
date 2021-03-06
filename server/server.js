require('./config/config.js');
const {ObjectID}=require('mongodb');
const _=require('lodash');

var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var{Todo}=require('./models/Todo');
var{User}=require('./models/User');

var app=express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);

  });
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});

//GET /todos/132333
app.get('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo)
    {
      return res.status(404).send();
    }
    res.send({todo});
  },(e)=>{
    res.status(400).send();
  });

});

app.delete('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo)
    {
      return res.status(404).send();
    }
    res.send({todo});
  },(e)=>{
    res.status(400).send();
  });
});

app.patch('/todos/:id',(req,res)=>{
  var id=req.params.id;
  var body = _.pick(req.body,['text','completed']);
  if(!ObjectID.isValid(id))
  {
    return res.status(404).send();
  }
  if(_.isBoolean(body.completed)&& body.completed)
  {
    body.completedAt=new Date().getTime();
  }
  else{
    body.completed=false;
    body.completedAt=null;

  }
  Todo.findByIdAndUpdate(id,{$set:body},{new: true}).then((todo)=>{
    if(!todo)
    {
      return res.status(404).send();

    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })
});

app.listen(port,()=>{
  console.log(`Started on port ${port}`);
});

module.exports={app};
