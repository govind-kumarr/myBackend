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
    console.log("i am validating query");
    for (let key in obj) {
      obj[key] = removeQuotes(obj[key]);
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
