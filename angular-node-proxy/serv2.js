exp=require("express")
app=exp()

app.listen(2000)
app.get("/met1",(req,res)=>{
res.send({result:"abcd"})
})
console.log("Server started at 2000")