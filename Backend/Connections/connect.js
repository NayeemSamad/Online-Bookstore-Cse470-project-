const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Nayeemsamad:Nayeem@1399@cluster01.plrcnv6.mongodb.net/BookStore470?retryWrites=true&w=majority&appName=Cluster01"
)
.then(()=> console.log("connect"));