const mongoose  = require("mongoose")
mongoose.connect("mongodb://localhost:27017/vrajeshdynamic",{
    // useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("successful connection");
}).catch((error)=>{
    console.log(error);
})
