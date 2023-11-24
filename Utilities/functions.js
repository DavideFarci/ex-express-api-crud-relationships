function slugControl(title, list) {
  if (!title || typeof title !== "string") {
    throw new Error(
      "createSlug: Il titolo deve essere presente e deve essere di tipo stringa"
    );
  }

  if (!list) {
    throw new Error("createSlug: L'array deve essere passato");
  }

  let slug = title.toLowerCase().split(" ").join("-");
  let increment = 0;
  while (list.find((el) => el.slug === slug)) {
    increment++;
    slug = title.toLowerCase().split(" ").join("-") + "-" + increment;
  }
  return slug;
}

module.exports = {
  slugControl,
};
