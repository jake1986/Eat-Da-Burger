const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res){

    burger.selectAll(function(data){
       
        const burgerObj = {
            burgers : data
        }
        
        res.render("index", burgerObj);

    });
});
router.post("/api/burgers", function(req, res){

    const burgerName = req.body.burger
   
    burger.insertOne(burgerName, function(result){
       
        res.json( {id : result.insertId} );
    });
});

router.put("/api/burgers/:id", function(req, res){

    const burgerId = req.params.id;
    
    burger.updateOne(burgerId, function(result){

        if(result.changedRows === 0){

            return res.status(404).end();
        }
        else {
            res.json( {id : result.insertId} );
            res.status(200).end();
        }
        
    });
});

router.delete("/api/burgers/:id", function(req, res){
    
    const burgerId = req.params.id;
    
    burger.deleteBurger(burgerId, function(result){

        if(res.affectedRows === 0){

            res.status(404).end();
        }
        else {
            
            res.status(200).end();
        }
    });
});

module.exports = router;

// var express = require("express");

// var router = express.Router();

// // Import the model (burger.js) to use its database functions.
// var burger = require("../models/burger.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   burger.selectAll(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     // console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/burgers", function(req, res) {
//   console.log(req.body);
//   burger.insertOne("burger_name", req.body.burger_name, function(result) {
//     res.redirect("/");
//     // res.json({ id: result. });
//   });
// });

// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.updateOne(
//     {
//       devoured: req.body.devoured
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

// // Export routes for server.js to use.
// module.exports = router;