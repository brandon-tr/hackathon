var mongoose = require("mongoose");

var MasterData = new mongoose.Schema(
  {
    ProductId: {
      type: String,
      required: [true, "You need to have a id"]
    },
    UPC: {
      type: String,
      required: [true, "You need to have a UPC"]
    },
    Title: {
      type: String,
      required: [true, "You need to have a Title"]
    },
    ArtistName: {
      type: String,
      required: [true, "You need to have a ArtistName"]
    },
    RelDate: {
      type: String,
      required: [true, "You need to have a RelDate"]
    }
  },
  { collection: "MasterData" }
);
var SalesData = new mongoose.Schema(
  {
    ProductId: {
      type: String,
      required: [true, "You need to have a id"]
    },
    SaleQty: {
      type: String,
      required: [true, "You need to have a SaleQty"]
    },
    SalesRev: {
      type: String,
      required: [true, "You need to have a SalesRev"]
    },
    UnitPrice: {
      type: String,
      required: [true, "You need to have a UnitPrice"]
    }
  },
  { collection: "SalesData" }
);

mongoose.model("MasterData", MasterData, "MasterData");
mongoose.model("SalesData", SalesData, "SalesData");
