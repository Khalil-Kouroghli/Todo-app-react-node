const express = require("express") 
const router = express.Router(); 
const {getAll,getOne,addTodo,getByUser,deleteById,updateById} = require("../controllers/TodosController.js") 


router.get("/getAll",getAll); 
router.get("/:completed",getOne); 
router.post("/add",addTodo); 
router.get("/by/:user",getByUser);
router.delete("/delete/:id",deleteById)
router.put("/update/:id",updateById)
module.exports = router 