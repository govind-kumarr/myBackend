export const removeQuotes = (str) =>
  typeof str != "string"
    ? str
    : str[0] == "'" && str.at(-1) == "'"
    ? str.slice(1, -1)
    : str[0] == '"' && str.at(-1) == '"'
    ? str.slice(1, -1)
    : str.at(0) == '"' || str.at(0) == "'"
    ? str.slice(1)
    : str.at(-1) == '"' || str.at(-1) == "'"
    ? str.slice(-1)
    : str;

export const validateQuery = (obj) => {
  if (typeof obj == "object") {
    for (let key in obj) {
      if (
        key == "OgPrice" ||
        key == "ratingV" ||
        key == "ratingC" ||
        key == "dprice"
      ) {
        obj[key] = +obj[key];
      } else if (typeof (obj[key] == "string")) {
        obj[key] = removeQuotes(obj[key]);
      }
    }
  }
  return obj;
};

/**
 *  
console.log(typeof {});
    console.log("govind".at(-1));
    console.log("'govind'".slice(1,-1));
*/
