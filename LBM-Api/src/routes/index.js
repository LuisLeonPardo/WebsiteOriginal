const { Router } = require("express");
const router = Router();
const users = require("./public/user.js");
const auth = require("./public/auth.js");
const usersPrivate = require("./private/userPrivate.js");
const projectsPrivate = require("./private/projectsPrivate");
const projects = require("./public/projects");

router.use("/users", users);
router.use("/auth", auth);
router.use("/usersprivate", usersPrivate);
router.use("/projectsprivate", projectsPrivate);
router.use("/product", projects);

module.exports = router;
