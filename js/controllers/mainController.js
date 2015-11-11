(function () {
    'use strict';

    app.controller.factory('mainController', function () {
        var view = this.view;

        var updateStatus = function () {
            view.innerHTML = "mainController is loaded";
        };

        updateStatus();
    });
})();