// Filename: app.js

define([
  'jquery',
  'underscore',
  'backbone',
  'router'
],
  function ($, _, Backbone, Router) {
      var initialize = function () {
          //var session = new Session({location:'Cape'});
          var router = new Router();
          Backbone.history.start();

   //ajax prefilter
          $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
              if (options.url.indexOf("hellomarvin") === -1) {
                  //    options.url = "http://localhost/habariville/api/" + options.url;
                      options.url = "http://www.hellomarvin.co.za/api/" + options.url;
              }
          });
      }

      return {
          initialize: initialize
      };
  });