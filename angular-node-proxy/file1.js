rt=exp.Router()

rt.get("/met1",(req,res)=>{
    res.send({resp:"hi"})
    })

    module.exports=rt