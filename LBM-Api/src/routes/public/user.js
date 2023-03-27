const { Router } = require("express");
const router = Router();
const {
  getUserById,
  getAdminByWallet,
} = require("../../controllers/controllerUser.js");

router.get("/:id", getUserById);
router.get("/admin/:wallet", getAdminByWallet);

module.exports = router;
