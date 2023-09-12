const express = require("express");
const cors = require("cors");
const app = express();
const corOptions = {
    origin:'http://localhost:8080'
}
const PORT = process.env.port||8080
//middleware
// app.use(corOptions);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//testing api 
app.get('/',(req,res)=>{
    res.json({message:'hello from API'});
});
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})

