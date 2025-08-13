sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/BindingMode',
     "sap/ui/model/json/JSONModel",
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
    ],
  (Controller, BindingMode, JSONModel, FlattenedDataset, ChartFormatter, Format) => {
    "use strict";

    return Controller.extend("com.te.project1.controller.covid.CovidList", {
      dataPath: "https://api.rootnet.in/covid19-in/stats/latest",

      onInit() {
       
        var dataModel = new JSONModel(this.dataPath);
        this.getView().setModel(dataModel,"Latest");


      }
      
    });
  }
);
