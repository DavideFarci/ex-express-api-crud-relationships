const { log } = require("console");

/**
 *
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

module.exports = function (err, req, res, next) {
  sendRes(err, res);
};

function sendRes(err, res) {
  const status = err.status || 500;

  res.format({
    json: () => {
      res.status(status).json({
        message: "Qualcosa è andato storto",
        error: err.message,
        errorInstace: err.name,
      });
    },
    default: () => {
      res.status(status).send("<h1>Qualcosa è andato storto</h1>");
    },
  });
}

module.exports.sendRes = sendRes;
