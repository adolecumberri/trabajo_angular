
const controller = {};

controller.showAll = (req, res) => {
  res.send("controller, funcion showAll");
};

controller.showById = (req, res) => {
  res.send("controller, funcion showById");
};

controller.insert = (req, res) => {
  res.send("controller, funcion insert");
};

controller.updateById = (req, res) => {
  res.send("controller, funcion updateById");
};

controller.deleteById = (req, res) => {
  res.send("controller, funcion deleteById");
};

module.exports = controller;
