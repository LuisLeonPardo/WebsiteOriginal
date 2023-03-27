const { Router } = require("express");
const router = Router();

const {
  getProjectById,
  getProjects,
  getProjectsByName,
} = require("../../controllers/controllerProjects.js");

router.get("/", getProjects);
router.get("/:name", getProjectsByName);

module.exports = router;
