const User = require("../model/modelUser.js");
const ErrorResponse = require("../utils/errorResponse.js");
const Admin = require("../model/modelAdmin.js");

const getUsers = async (req, res, next) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    return res.send({
      info: "No tienes permisos para ver los usuarios",
      success: false,
    });
  }
  const options = {
    limit: parseInt(req.query.limit) || 8,
    page: parseInt(req.query.page) || 1,
  };
  try {
    const users = await User.paginate({ estado: true }, options);
    res.send({
      info: "Todos lo usuarios enviados",
      users,
      success: true,
    });
  } catch (err) {
    res
      .status(500)
      .send({ info: "Error al realizar la peticion", success: false });
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return next(new ErrorResponse("Error al obtener el usuario", 500, false));
    }
    res.send(user);
  } catch (err) {
    next(new ErrorResponse("Error al obtener el usuario", 500, false));
    console.log(err);
  }
};

const getAdminByWallet = async (req, res, next) => {
  const { wallet } = req.params;
  try {
    const admin = await Admin.find({ wallet: wallet });
    if (!admin) {
      return next(new ErrorResponse("Error al obtener el usuario", 500, false));
    }
    res.send(admin);
  } catch (err) {
    next(new ErrorResponse("Error al obtener el usuario", 500, false));
  }
};

const getUsersByName = async (req, res, next) => {
  const { username } = req.query;
  try {
    const user = await User.find({
      username: { $regex: username, $options: "i" },
    });
    if (!user.length) {
      return next(new ErrorResponse("Error al obtener el usuario", 500, false));
    }
    res.send(user);
  } catch (err) {
    next(new ErrorResponse("Error al obtener el usuario", 500, false));
  }
};

const editUsername = async (req, res, next) => {
  const { id } = req.params;
  const { username } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, { username }, { new: true });
    if (!user) {
      return next(new ErrorResponse("Error al obtener el usuario", 500, false));
    }
    res.send(user);
  } catch (err) {
    next(new ErrorResponse("Error al obtener el usuario", 500, false));
  }
};

const editImage = async (req, res, next) => {
  const id = req.user._id;
  const { url } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { Image: url },
      { new: true }
    );

    if (!user) {
      return res
        .status(404)
        .send({ info: "usuario no encontrado", success: false });
    }
    const updateUser = await User.findById(id);
    res.send({
      info: "imagen de perfil actualizado",
      success: true,
      updateUser,
    });
  } catch (err) {
    res.status(500).send({ info: "Algo salio mal", success: false, err });
  }
};

const editIsAdmin = async (req, res) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    return res.status(401).send({
      info: "No tienes permisos para acceder a esta ruta",
      success: false,
    });
  }
  try {
    const { id, change } = req.body;
    await User.findByIdAndUpdate(id, {
      isAdmin: change,
    });
    res.send({ info: "Estado isAdmin cambiado", success: true });
  } catch {
    res.status(500).send({ info: "Algo salio mal", success: false });
  }
};

const deleteUser = async (req, res) => {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    return res.status(401).send({
      info: "No tienes permisos para acceder a esta ruta",
      success: false,
    });
  }
  try {
    const { id } = req.body;
    const userDB = await User.findById(id);
    if (!userDB) {
      return res
        .status(404)
        .send({ info: "Usuario no encontrado", success: false });
    }
    await User.findByIdAndDelete(id);
    res.send({ info: "Usuario eliminado", success: true });
  } catch {
    res.status(500).send({ info: "Algo salio mal", success: false });
  }
};

const banUsers = async (req, res) => {
  const { isAdmin } = req.user;
  if (!isAdmin)
    return res.status(401).send({
      info: "No tienes permisos para acceder a esta ruta",
      success: false,
    });
  try {
    const { id, fecha } = req.body;
    await User.findByIdAndUpdate(
      id,
      {
        timeBanned: fecha,
      },
      { new: true }
    );
    res.send({ info: "Usuario baneado", success: true });
  } catch {
    res
      .status(500)
      .send({ info: "Error al intentar banear al usuario", success: false });
  }
};

const permaBanUsers = async (req, res) => {
  const { isAdmin } = req.user;
  if (!isAdmin)
    return res.status(401).send({
      info: "No tienes permisos para acceder a esta ruta",
      success: false,
    });
  try {
    const { id } = req.body;
    await User.findByIdAndUpdate(id, {
      estado: false,
    });
    res.send({ info: "Usuario baneado permanentemente", success: true });
  } catch {
    res
      .status(500)
      .send({ info: "Error al intentar banear al usuario", success: false });
  }
};

module.exports = {
  getUsers,
  getUserById,
  getUsersByName,
  editUsername,
  editIsAdmin,
  deleteUser,
  banUsers,
  permaBanUsers,
  editImage,
  getAdminByWallet,
};
