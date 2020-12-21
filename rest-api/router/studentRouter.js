const express = require("express");
const router  = express.Router();

const StudentModel = require("../models/StudentModel");
const ResponseClass  = require("../models/ResponseClass");

router.get("/", function(req, resp, next){
    StudentModel.getAll(function(error, ret){
        let response = new ResponseClass();

        if(error){
            response.error = true;
            response.message = "An Error has ocurred."
            console.log("Erro: ", error);
        }else{
            response.data = ret;
        }

        resp.json(response);
    });
});
// getByID
router.get("/:id?", function(req, resp, next){

    console.log(req.body, req.params);
    StudentModel.getById(req.params.id,function(error, ret){
        let response = new ResponseClass();
        if(error){
            response.error = true;
            response.message = "An Error has ocurred."
            console.log("Erro: ", error);
        }else{
            response.data = ret;
            
        }

        resp.json(response);
    });
});
// getByName
// router.get("/:name?", function(req, resp, next){
    
//     console.log(req.body, req.params);
//     StudentModel.getByName(req.params.name,function(error, ret){
//         let response = new ResponseClass();

//         if(error){
//             response.error = true;
//             response.message = "An Error has ocurred."
//             console.log("Erro: ", error);
//         }else{
//             response.data = ret;
//         }

//         resp.json(response);
//     });
// });

// post
router.post("/", function(req, resp, next){
    let response = new ResponseClass();

    
    StudentModel.create(req.body,function(error, ret){
        if(error){
            response.error = true;
            response.message = "An Error has ocurred";
            console.log("Erro: ", error);
        }else{
            if(ret.affectedRows > 0){
                response.message = "A record has been created";
            }else{
                response.error = true;
                response.message = "An Error has ocurred2.";
                console.log("Erro: ", error);
            }
            console.log('resp:', response);
            response.data = ret;
        }

        resp.json(response);
    });
});

// put
router.put("/", function(req, resp, next){
    let response = new ResponseClass();
    console.log(req.body, req.params);

    StudentModel.update(req.body,function(error, ret){
        if(error){
            response.error = true;
            response.message = "An Error has ocurred";
            console.log("Erro: ", error);
        }else{
            if(ret.affectedRows > 0){
                response.message = "A record has been created";
            }else{
                response.error = true;
                response.message = "An Error has ocurred2.";
                console.log("Erro: ", error);
            }
            console.log('resp:', response);
            response.data = ret;
        }

        resp.json(response);
    });
});
// delete
router.delete("/:id?", function(req, resp, next){

    console.log(req.body, req.params);
    StudentModel.delete(req.params.id,function(error, ret){
        let response = new ResponseClass();
        if(error){
            response.error = true;
            response.message = "An Error has ocurred."
            console.log("Erro: ", error);
        }else{
            response.message = "A record has been deleted."
            response.data = ret;
            
        }

        resp.json(response);
    });
});
module.exports = router;