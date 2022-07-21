const mongoose  = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/vrajeshdynamic",{
//     // useCreateIndex: true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }).then(()=>{
//     console.log("successful connection");
// }).catch((error)=>{
//     console.log(error);
// })


const DB ="mongodb+srv://vrajesh:123123vmb@cluster0.qybgzts.mongodb.net/vrajeshdynamic?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify:false,
    // useCreateIndex:true
}).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>console.log(`no connection`));