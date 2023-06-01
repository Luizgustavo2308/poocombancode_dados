const express = require("express");
const router = express.Router();

const produtosController = require("../controllers/produtos")

router.get('/', (req, res)=> {
    produtosController.getALL(req, res);
})

module.exports=router;