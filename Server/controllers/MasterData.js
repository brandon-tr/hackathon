var mongoose = require("mongoose");
var MasterData = mongoose.model("MasterData");
var SalesData = mongoose.model("SalesData");

module.exports = {
  GetAllMasterData: function(req, res) {
    MasterData.find({}, function(err, records) {
      if (err) throw err;
      if (records.length <= 0) {
        return res.status(404).json("MasterData currently has no records");
      }
      return res.status(200).json(records);
    });
  },
  FindProduct: function(req, res) {
    SalesData.findOne({ ProductId: req.params.id }, function(err, data) {
      if (err) {
        return res.status(404).json("Error Retrieving Data, please try again");
      }
      return res.json(data);
    });
  },
  AddMasterDataRecord: function(req, res) {
    let _masterData = new MasterData();
    _masterData.ProductId = req.body.ProductId;
    _masterData.UPC = req.body.UPC;
    _masterData.Title = req.body.Title;
    _masterData.ArtistName = req.body.ArtistName;
    _masterData.RelDate = req.body.RelDate;
    _masterData.save(function(err) {
      if (err) {
        return res
          .status(400)
          .json("Error saving record, please verify all data is correct");
      }
      let _salesData = new SalesData();
      _salesData.ProductId = req.body.ProductId;
      _salesData.SaleQty = req.body.SaleQty;
      _salesData.SalesRev = req.body.SalesRev;
      _salesData.UnitPrice = req.body.UnitPrice;
      _salesData.save(function(errSale) {
        if (err) {
          return res
            .status(400)
            .json("Error saving record, please verify all data is correct");
        }
        return res.status(200).json("Successfully added record");
      });
    });
  },
  DeleteMasterDataRecord: function(req, res) {
    MasterData.findOneAndRemove({ ProductId: req.params.id }, function(
      err,
      res
    ) {
      if (err) {
        return res.status(400).json("Error deleting record, please retry");
      }
      SalesData.findOneAndRemove({ ProductId: req.body.id }, function(
        err,
        res
      ) {
        if (err) {
          return res.status(400).json("Error deleting record, please retry");
        }
      });
    });
    return res.status(200).json("Record has been deleted");
  }
};
