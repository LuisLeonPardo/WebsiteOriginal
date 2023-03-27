const { Router } = require("express");

const {
  getUsers,
  getUsersByName,
  editUsername,
  editIsAdmin,
  deleteUser,
  banUsers,
  permaBanUsers,
  editImage,
} = require("../../controllers/controllerUser");

const { protect } = require("../../middleware/protect");

const router = Router();

router.get("/", protect, getUsers);
router.get("/username", protect, getUsersByName);
router.put("/isAdmin", protect, editIsAdmin);
router.put("/editImage/profile", protect, editImage);
router.put("/:id/profile", protect, editUsername);
router.delete("/deleteUser", protect, deleteUser);
router.post("/ban", protect, banUsers);
router.post("/permaBan", protect, permaBanUsers);

module.exports = router;
