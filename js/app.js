(function () {
    'use strict';

    window.app = window.app || {};

    /**
     *
     * @type {{init}}
     */
    app = (function () {

        var init = function () {
        };

        return {
            init: init
        };
    })();

    app.controller = (function () {
        return (function () {

            /**
             *
             * @param id
             * @param extend
             * @returns {boolean}
             * @private
             */
            var _Controller = function (id, extend) {
                var selector = '[controller=' + id + ']',
                    view = document.querySelector(selector);

                if (view === null || typeof extend !== 'function') {
                    return false;
                }

                this.id = id;
                this.view = view;

                extend.call(this);
            };

            /**
             *
             * @param id
             * @param extend
             * @returns {_Controller}
             */
            var factory = function (id, extend) {
                return new _Controller(id, extend);
            };

            return {
                factory: factory
            };
        })();
    })();

    window.onload = function () {
        app.init();
    };
})();