/* <copyright>
</copyright> */
var Montage = require("montage").Montage,
    ObjectController = require("montage/ui/controller/object-controller").ObjectController;

var  ParentController = exports.ParentController = Montage.create(ObjectController, {


    init: {
      value: function() {
          return this;
      }
    },

    customerList: {
        value: []
   },

    customerSelectionList: {
        value: {}
    }

});
