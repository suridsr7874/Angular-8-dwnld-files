exp=require("express")
app=exp()
app.listen(1000)
mj=require("mongojs")
oid=require("mongojs").ObjectID
con=mj("mongodb://localhost:27017/bat730pm")
cr=require("cors")
bp=require("body-parser")
app.use(bp.json())
app.use(cr())

////to get data
app.get("/getdata",(req,res)=>{
con.tbl_user.find(function(err,result){
if(err)
res.send(err)
else
res.send(result)
})
})
///to insert
app.post("/insdata",(req,res)=>{
con.tbl_user.save(req.body)
res.send({result:"Inserted"})
})
///to delete
app.post("/deldata",(req,res)=>{
    newid=oid(req.body._id)
con.tbl_user.remove({_id:newid})
res.send({result:"Deleted"})
})
















///to update
app.post("/update",(req,res)=>{
con.tbl_user.update({_id:oid(req.body._id)},{$set:{uname:req.body.un,city:req.body.ct}})
res.send({resp:"Updated"})
})