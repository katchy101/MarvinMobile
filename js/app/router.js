define([
  'jquery',
  'underscore',
  'backbone'
],

    function ($, _, Backbone) {
        var Router = Backbone.Router.extend({
            routes: {
                '': 'boot',
            },

            AppView:function(view){
                if (this.currentView){
                    this.currentView.close();
                }
                this.currentView = view;
                this.currentView.render();
                $(".page").html(this.currentView.el);
            },

            initialize: function () {
            //    var Header = require(['views/static/header'], function (Header) {var header = new Header();header.render();}),
            //        Footer = require(['views/static/footer'], function (Footer) {var footer = new Footer(); footer.render();});

                    //Get user from local

                    // if not

                    // call login



            },
            boot: function () {
                var that = this;
                var Home = require(['views/pages/boot'], function (Home) {
                    var home = new Home();
                    that.AppView(home);
                });
            },

            home: function () {
                var that = this;
                var Home = require(['views/pages/home'], function (Home) {
                    var home = new Home();
                    that.AppView(home);
                });
            },
});
        return Router;
        var router = new Router();
    });
