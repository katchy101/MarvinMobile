// Filename: app.js

define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'DB'
],
  function ($, _, Backbone, Router, DB) {
      var initialize = function () {

          // AJAX Pre-Filter
          $.ajaxPrefilter(function (options, originalOptions, jqXHR) {
            if (options.url.indexOf("hellomarvin") === -1) {
              options.url = "http://www.hellomarvin.co.za/api/" + options.url;
            }
          });


          var router = new Router();
          Backbone.history.start();
      }



      return {initialize: initialize};
  });
