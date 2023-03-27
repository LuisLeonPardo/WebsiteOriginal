const Project = require("../model/modelProject");
const ErrorResponse = require("../utils/errorResponse.js");

const getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    res.send(project);
    return;
  } catch (err) {
    next(new ErrorResponse("Error al econtrar el producto", 500, false));
    console.error(err);
  }
};

const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    res.send(projects);
    return;
  } catch (err) {
    next(new ErrorResponse("Error al econtrar el producto", 500, false));
    console.error(err);
  }
};

const getProjectsByName = async (req, res) => {
  const $regex = req.params.name;
  try {
    if (!req.params.name.length) {
      const project = await Project.find();
      res.send({ info: "Project find", project, success: true });
    } else {
      const project = await Project.find({ name: { $regex, $options: "i" } });
      if (!project.length) {
        res.status(404).send({
          info: "There is no projects with that name",
          success: false,
        });
      } else {
        res.send({ info: "Project found", project, success: true });
      }
    }
  } catch (err) {
    res.send({ info: "something went wrong", err, success: false });
    console.error(err);
  }
};

const getUnapprovedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ approved: false });
    if (!projects.length) {
      res
        .status(404)
        .send({ info: "There is no projects to approve", success: false });
    } else {
      res.send({ info: "Projects found", projects, success: true });
    }
  } catch (err) {
    res.send({ info: "something went wrong", err, success: false });
    console.error(err);
  }
};

const getProjectCategory = async (req, res) => {
  try {
    if (!req.params.gender.length) {
      const project = await Project.find();
      res.send({ info: "Projecto encontrado", project, success: true });
    } else {
      const project = await Project.find({
        genero: { $regex: req.params.gender, $options: "i" },
        categoria: { $regex: req.params.category, $options: "i" },
        edad: { $regex: req.params.age, $options: "i" },
      });
      if (!project.length) {
        res
          .status(404)
          .send({ info: "No existe productos con ese genero", success: false });
      } else {
        res.send({ info: "Projectos encontrados", project, success: true });
      }
    }
  } catch (err) {
    res.send({ info: "Algo salio mal", err, success: false });
    console.error(err);
  }
};

const createProject = async (req, res, next) => {
  const { body } = req;
  try {
    const project = await new Project(body);
    await project.save();
    res.send(project);
  } catch (err) {
    next(new ErrorResponse("Error al crear el producto", 500, false));
    console.error(err);
  }
};

const approveProject = async (req, res, next) => {
  const { id } = req.params;
  const { approved } = req.body;
  try {
    const project = await Project.findByIdAndUpdate(
      id,
      { approved },
      { new: true }
    );
    if (!project) {
      return next(new ErrorResponse("Project not found", 500, false));
    }
    res.send(project);
  } catch (err) {
    next(new ErrorResponse("Project not found", 500, false));
  }
};

const deleteProject = async (req, res) => {
  // const { isAdmin } = req.user;
  // if (!isAdmin) {
  //   return res.status(401).send({
  //     info: "you do not have permissions to access this path",
  //     success: false,
  //   });
  // }
  try {
    const { id } = req.body;
    console.log(id);
    const project = await Project.findById(id);
    if (!project) {
      return res
        .status(404)
        .send({ info: "Project not found", success: false });
    }
    await Project.findByIdAndDelete(id);
    res.send({ info: "Project deleted", success: true });
  } catch {
    res.status(500).send({ info: "ups something went wrong!", success: false });
  }
};

module.exports = {
  createProject,
  getProjectById,
  getProjects,
  getProjectCategory,
  getProjectsByName,
  getUnapprovedProjects,
  approveProject,
  deleteProject,
};
