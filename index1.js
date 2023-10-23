const express = require('express')
const app = express()
const port = 7512

app.get('/',(req,res) =>{
    res.send("Hello ini express")
    })
app.post('/',(req,res) =>{
    res.send("Hello ini rapip madep well well wanieu")
        })

app.get('/lemontea',(req,res) =>{
    res.json({
        status: "OK",
        message: "This is Lemon Tea",
    });
    //res.send("This is Hot Lemon Tea")
        })

app.post('/lemontea',(req,res) =>{
    res.send("This is Ice Lemon Tea")
         })
app.put('/lemontea',(req,res) =>{
        res.send("This is Less Sugar Lemon Tea")
         })
app.delete('/lemontea',(req,res) =>{
        res.send("This is Brutal Lemon Tea")
         })

app.listen(port,() => console.log(`Server running on port ${port}`))