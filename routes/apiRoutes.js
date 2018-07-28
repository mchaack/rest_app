var tables = require("./data/tableData.js");
var waitList = require("./data/waitlistData.js");

module.exports = function(app){
    app.get("/api/tables", function(req, res){
        console.log(tables);        
        res.json(tables);
    })

    app.get("/api/waitlist", function(req, res){
        res.json(waitList);
    })

    app.post("/api/tables", function(req, res){
        if(tables.length < 5){
            tables.push(req.body);
            res.json(true)
        }else{
            waitList.push(req.body);
            res.json(false);
        }
    })

    app.post("api/clear", function(req, res){
        tables = [];
        waitList = [];

        res.send("success");
    })
}