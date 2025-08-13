sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
  "use strict";

  return Controller.extend("com.te.project1.controller.Tiles", {
      onInit: function() {
        let myTilesModel = new JSONModel("../model/tiles.json");
        this.getView().setModel(myTilesModel,"tiles")
        
      
      },
      onTilePress: function(oEvent){
       // this.getOwnerComponent().getRouter().navTo(oRoute);
       var sRoute = oEvent.getSource().getBindingContext("tiles").getProperty("route");
    this.getOwnerComponent().getRouter().navTo(sRoute);
      }
  });
});