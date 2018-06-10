var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://brandon:lonewolf@cluster0-mdmqn.mongodb.net/ProductMasterSalesData?retryWrites=true"
);

var fs = require("fs");
var path = require("path");

var models_path = path.join(__dirname, "/../models");

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf("js") > 0) {
    require(models_path + "/" + file);
  }
});
