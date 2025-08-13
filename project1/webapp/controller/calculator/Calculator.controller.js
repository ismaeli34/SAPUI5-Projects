sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("com.te.project1.controller.calculator.Calculator", {
          onInit() {
        },
        onAdd() {
            var number1 = Number(this.getView().byId("number1").getValue());
            var number2 = Number(this.getView().byId("number2").getValue());
            var result = number1 + number2;
            this.getView().byId("resultInput").setValue(result);

        },
        onSubtract: function () {
            var number1 = Number(this.getView().byId("number1").getValue());
            var number2 = Number(this.getView().byId("number2").getValue());
            var result = number1 - number2;
            this.getView().byId("resultInput").setValue(result);

        },
        onMultiply() {
            var number1 = Number(this.getView().byId("number1").getValue());
            var number2 = Number(this.getView().byId("number2").getValue());
            var result = number1 * number2;
            this.getView().byId("resultInput").setValue(result);
        },
        onDivide: function () {
            var number1 = Number(this.getView().byId("number1").getValue());
            var number2 = Number(this.getView().byId("number2").getValue());
            if(number2 == 0){
	            MessageBox.error("For divide operation number 2 cannot be 0. ");
            }
            var result = number1 / number2;
            this.getView().byId("resultInput").setValue(result);
        }
    });
  }
);
