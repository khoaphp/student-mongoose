var mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    Name:String,
    Active:Boolean,
    Score:Number
});
module.exports = mongoose.model("Student", studentSchema);