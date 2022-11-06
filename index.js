class Formatter {
 
  static capitalize(str) {
  return str.split("")[0].toUpperCase() + str.slice(1)
 }

 static sanitize(str) {
  const regex = /[^a-zA-Z-']/g;
  const replaced = str.replace(regex, "")
  return replaced
  // return str.replace(/[^A-Za-z0-9-']+/g, "");
  }

  static titleize(str) {
  //  const badWords = ["a", "an", "but", "of", "and", "for", "at", "by", "from"]
  //   const leftOut = str.includes(badWords) 
    return str.map(letter => letter[0].toUpperCase()+ letter.slice(1).toLowerCase()).join(" ")
  }
}




