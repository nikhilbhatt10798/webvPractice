const express = require('express'); //install express

const app = express();// creating app
// simple api / endpoint

app.get('/',(req,res,next)=>{
    // console.log('i got one request')
    res.send({
        name:"nikhil",
        age:25
    })
})


app.listen(3000,()=>{
    console.log('Server Started')
});// open app at port no. 3000 if successfully run then execute callback()and console msg