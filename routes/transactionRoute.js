const express = require("express");
const { addTransaction, getAllTransaction , editTransaction, deleteTransaction} = require("../controllers/transactionController");


//router object
const router = express.Router();

//routers
// add transaction method POST
router.post("/add-transaction",addTransaction);

// edit transaction method POST
router.post("/edit-transaction",editTransaction);

// get transaction
router.post("/get-transaction",getAllTransaction);

//Delete transection POST MEthod
router.post("/delete-transaction", deleteTransaction);

module.exports = router;
