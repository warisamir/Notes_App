const Group =require('../Models/Group');
const createGroup=async(req,res)=>{
    const {name,id}=req.body;
    const group=new Group({
        name,
        id
    });
    await group.save();;
    res.status(200).json();
}
const getGroup=async(req,res)=>{
    try{
    const {id}=req.params.id.populate('notes');
    const group=await Group.findOne(id); 
    res.status(200).json(group);
    }
    catch(err){
        res.status(404).json();
    }
}
const updateGroup=async(req,res)=>{
    const {id}=req.params;
    const group=await Group.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(group);
}
const deleteGroup=async(req,res)=>{
    const {id}=req.params;
    const group=await Group.findByIdAndDelete(id);
    res.status(200).json(group);
}
module.exports={createGroup,getGroup,updateGroup,deleteGroup}