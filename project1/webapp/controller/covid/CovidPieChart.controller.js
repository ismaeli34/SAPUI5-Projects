sap.ui.define(
  ["sap/ui/core/mvc/Controller",
    'sap/ui/model/BindingMode',
     "sap/ui/model/json/JSONModel",
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
    ],
  (Controller, BindingMode, JSONModel, FlattenedDataset, ChartFormatter, Format) => {
    "use strict";

    return Controller.extend("com.te.project1.controller.covid.CovidPieChart", {
      dataPath: "https://api.rootnet.in/covid19-in/stats/latest",
      oVizFrame: null,

      onInit() {
        Format.numericFormatter(ChartFormatter.getInstance());
        var formatPattern = ChartFormatter.DefaultPattern;


            var oVizFrame = this.oVizFrame = this.getView().byId("idVizFramePie");
            oVizFrame.setVizProperties({
                legend: {
                    title: {
                        visible: false
                    }
                },
                title: {
                    visible: false,
                    text: "Covid Cases History",

                }
            });


        var dataModel = new JSONModel(this.dataPath);
        oVizFrame.setModel(dataModel);

        var oPopOver = this.getView().byId("idPopOverPie");
        oPopOver.connect(oVizFrame.getVizUid());
        oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
      },
     
    });
  }
);
