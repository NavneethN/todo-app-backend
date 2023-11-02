const ToDoModel = require('../modals/ToDoModel')


module.exports.getToDo = async(req,res)=>{
    const toDo = await ToDoModel.find()
    res.send(toDo)
}
module.exports.saveToDo = async(req,res)=>{
    
    const{text}=req.body
    ToDoModel
    .create({text})
    .then((data)=>{
        console.log("added succesfullly");
        console.log(data);
        res.send(data)
    })
}   

module.exports.updateToDo = async(req,res)=>{
    const {_id,text}=req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=> res.send("updated succesfully"))
    .catch((err)=>console.log(err));
}

module.exports.deleteToDo = async(req,res)=>{
    const {_id}=req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted succesfully"))
    .catch((err)=>console.log(err));
}