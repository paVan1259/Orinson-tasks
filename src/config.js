const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/pavandb");

connect.then(() => {
    console.log("Database connected Succesfully");
})
.catch(() => {
    console.log("Database cannot be connected");
});

const Loginschema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("students",Loginschema);  

module.exports = collection;