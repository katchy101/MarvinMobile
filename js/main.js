require.config({
  baseUrl: "js/app",
  paths: {
    templates     : "./content/templates",
    images        : "./content/Images",
    jquery        : "./lib/jquery-1.11.1.min",
    underscore    : "./lib/underscore",
    backbone      : "./lib/backbone",
    backbonelocalstorage  : "./lib/backbone.localStorage",
    text          : "./lib/text",
    slider        : "./lib/jquery.slides",
    ratchet     : "./lib/ratchet",
    swipe:"./lib/jquery.touchSwipe",
    DB:"./lib/DB",
    collagePlus:'./lib/jquery.collagePlus'
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
    },
    'collagePlus' : {
      deps:['jquery'],
      exports: 'collagePlus'

    }
  }

});
require([
  "app"
  ], function(App){
  //  document.addEventListener("deviceready",   App.initialize, false);
    App.initialize();
  });
