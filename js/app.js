(function () {
    'use strict';

    window.app = window.app || {};

    /**
     *
     * @type {{init}}
     */
    app = (function () {
        var init = function () {
            Object.freeze(this.constants);
        };

        return {
            init: init
        };
    })();

    /**
     *
     * @type {{DIR_VIEWS}}
     */
    app.constants = (function () {
        return {
            DIR_VIEWS: 'js/views/'
        }
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
                var selector = '[controller=' + id + ']';
                var view = document.querySelector(selector);

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
             */
            _Controller.prototype.loadView = function (id) {
                /*var id = id || this.id;
                 var extension = '.html';
                 var url = app.constants.DIR_VIEWS + id + extension;
                 var xhReq = new XMLHttpRequest();
                 var html;

                 xhReq.open("GET", url, false);
                 xhReq.send(null);
                 html  = xhReq.responseText;

                 this.view.innerHTML = html;*/
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