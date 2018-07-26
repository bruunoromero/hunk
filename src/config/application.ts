const toPascalCase = require("to-pascal-case");

const DATABASE_URL = "mongodb://localhost:27017";

export const createDatabase = name => ({
  url: `${DATABASE_URL}/${name}`,
  connectionName: `${toPascalCase(name)}Db`,
});
