module.exports = {
  title: {
    in: ["body"],
    notEmpty: true,
    isString: true,
    optional: true,
    errorMessage: "Il titolo non può essere vuoto e deve essere una stringa",
  },
  image: {
    in: ["body"],
    notEmpty: true,
    isString: true,
    optional: true,
    errorMessage:
      "Il campo immagine non può essere vuoto e deve essere una stringa",
  },
  content: {
    in: ["body"],
    notEmpty: true,
    isString: true,
    optional: true,
    errorMessage: "Il contenuto non può essere vuoto e deve essere una stringa",
  },
  published: {
    in: ["body"],
    isBoolean: true,
    optional: true,
  },
};
