const PrismaExeption = require("../exeptions/prismaExeption");
const { sendRes } = require("./errorFormatter");

module.exports = function (req, res, next) {
  // res.status("404").json({ message: "Pagina non trovata" });
  sendRes(new PrismaExeption("La rotta richiesta non è stata trovata"), res);
};
