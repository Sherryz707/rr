const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

const app=express()
app.use(bodyParser.json())
app.use(cors())

app.get('/posts',(req,res)=>{

});

app.post('/events',(req,res)=>{
    
})


// get events and create a nice aggregated data structure
app.listen(4002,()=>{
    console.log("Listening at port 4002")
})