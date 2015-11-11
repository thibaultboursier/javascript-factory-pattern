(function () {
    'use strict';

    app.controller.factory('toolbarController', function () {
        var view = this.view;

        var updateStatus = function () {
            view.innerHTML = "toolbarController is loaded";
        };

        updateStatus();
    });
})();