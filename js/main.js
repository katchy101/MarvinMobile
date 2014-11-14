require.config({
  baseUrl: "js/app",
  paths: {
    templates: "./content/templates",
    jquery: "./lib/jquery-1.11.1.min",
    underscore: "./lib/underscore",
    backbone: "./lib/backbone",
    backbonelocalstorage: "./lib/backbone.localStorage",
    text: "./lib/text",
    slider: "./lib/jquery.slides",
    ratchet: "./lib/ratchet",
    swipe:"./lib/jquery.touchSwipe",
    DB:"./lib/DB"
  },
  shim: {
    "underscore": {
      exports: "_"
    },
    "backbone": {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    "slider":{
      deps: ["jquery"],
      exports:"slidesjs"
    },
    "ratchet":{
      deps:['jquery']
    },
    "swipe" :{
      deps:['jquery'],
      exports:'swipe'
    },
    'DB' :{
      deps:['jquery'],
      exports:'DB'
    }
  }

});
require([
  "app"
  ], function(App){
    App.initialize();
  });
