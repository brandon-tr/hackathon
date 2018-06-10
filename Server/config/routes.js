var MasterData = require("../controllers/MasterData");
var path = require("path");

module.exports = function(app) {
  app.get("/GetAllMasterData", MasterData.GetAllMasterData);
  app.post("/AddMasterDataRecord", MasterData.AddMasterDataRecord);
  app.delete("/DeleteMasterDataRecord/:id", MasterData.DeleteMasterDataRecord);
  app.get("/FindProduct/:id", MasterData.FindProduct);
  app.all("*", (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "./../../client/dist/index.html"));
  });
};
