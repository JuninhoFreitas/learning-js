const fs = require("fs");
const path = require("path");
const { error } = require("./constants");
const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ["id", "name", "profession", "age"],
};
class File {
  static async csvToJson(filePath) {
    const content = await File.getFileContent(filePath);
    const validation = File.isValid(content);
    if(!validation.valid) throw new Error(validation.error)
    return content;
  }
  static getFileContent(filePath) {
    return fs.readFileSync(filePath, "utf8").toString();
  }
  static isValid(csvString, options = DEFAULT_OPTION) {
    const [header, ...fileWithoutHeader] = csvString.split("\n");
    
    const isHeaderValid = header === options.fields.join(",");
    if (!isHeaderValid) {
      console.log(header)
      return {
         error: error.FILE_FIELDS_ERROR_MESSAGE,
         valid: false 
        };
    }
    const isContentLengthAccepted = (
      fileWithoutHeader.length > 0 && fileWithoutHeader.length <= options.maxLines
    )

    if(!isContentLengthAccepted){
      return{
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false
      }
    }

    return { valid:true}
  }
}

module.exports = File