var Student = require("../models/Student");

module.exports = function(app){

    // add new Student
    app.post("/student/new", function(req, res){
        var newStudent = new Student({
            Name:req.body.Name,
            Active:req.body.Active,
            Score:req.body.Score
        });
        newStudent.save()
        .then((data)=>{res.json({result:1, message:"Okay", item:data});})
        .catch((error)=>{
            console.log(error);
            res.json({result:0, message:"Failed"});
        });
    });

    app.post("/student/list", function(req, res){
        Student.find()
        .then((data)=>{     // data IS AN ARRAYYYYYYYYYYYYYYYYYYY []
            console.log(data);
            res.json({result:1, message:"Okay", array:data});
        })
        .catch((error)=>{
            console.log(error);
            res.json({result:0, message:"Failed"});
        });
    });

    app.post("/student/detail", function(req, res){
        Student.findById(req.body.id)
        .then((data)=>{     // data IS AN OBNJECT (null)
            console.log(data);
            res.json({result:1, message:"Okay", info:data});
        })
        .catch((error)=>{
            console.log(error);
            res.json({result:0, message:"Failed"});
        });
    });

    app.post("/student/update", function(req, res){
        Student.findByIdAndUpdate(req.body.id, {
            Name:req.body.Name,
            Active:req.body.Active,
            Score:req.body.Score
        })
        .then((data)=>{     
            console.log(data);
            res.json({result:1, message:"Okay", info:data});
        })
        .catch((error)=>{
            console.log(error);
            res.json({result:0, message:"Failed"});
        });
    });

}