const { Router } = require("express");
const router = Router();

const { protect } = require("../../middleware/protect.js");
const {
  createProject,
  getProjectById,
  approveProject,
  deleteProject,
  getUnapprovedProjects,
} = require("../../controllers/controllerprojects");

router.post("/", createProject);
router.get("/:id", getProjectById);
router.get("/", getUnapprovedProjects);
router.put("/:id/approve", approveProject);
router.delete("/deleteProject", deleteProject);

module.exports = router;
