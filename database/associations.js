const item = require("../models/item");
const tipo = require("../models/tipo");

//add a foreign key to the tipo table
item.hasOne(tipo);

//add an itemid key to tipo table
tipo.belongsTo(item)