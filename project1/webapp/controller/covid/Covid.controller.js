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

    return Controller.extend("com.te.project1.controller.covid.Covid", {
      dataPath: "https://api.rootnet.in/covid19-in/stats/history",
      oVizFrame: null,

      onInit() {
        Format.numericFormatter(ChartFormatter.getInstance());
        var formatPattern = ChartFormatter.DefaultPattern;


        var oVizFrame = (this.oVizFrame = this.getView().byId("idVizFrame"));
        oVizFrame.setVizProperties({
          plotArea: {
            dataLabel: {
              formatString: formatPattern.SHORTFLOAT_MFD2,
              visible: true,
            },
          },
          valueAxis: {
            label: {
              formatString: formatPattern.SHORTFLOAT,
            },
            title: {
              visible: false,
            },
          },
          categoryAxis: {
            title: {
              visible: false,
            },
          },
          title: {
            visible: false,
            text: "Covid Cases History",
          },
        });
        var dataModel = new JSONModel(this.dataPath);
        oVizFrame.setModel(dataModel);

        var oPopOver = this.getView().byId("idPopOver");
        oPopOver.connect(oVizFrame.getVizUid());
        oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
      },
      onPressList: function () {
     var oRouter = this.getOwnerComponent().getRouter();
  oRouter.navTo("covidListRoute");  
      },
      onPressGraph: function () {
           var oRouter = this.getOwnerComponent().getRouter();
  oRouter.navTo("covidPieChartRoute");  
      },
    });
  }
);
