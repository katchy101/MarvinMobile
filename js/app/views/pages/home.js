define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/pages/home.html',
  'slider',
  'ratchet',
  'swipe'

  ], function ($, _, Backbone, headerTemplate,slidesjs,Swipe ) {
    var Header = Backbone.View.extend({
      events: {
      },

      el: $('#appMiddle'),

      render: function () {
        var compiledTemplate = _.template(headerTemplate);
        this.$el.html(compiledTemplate);

        setTimeout(function(){
          $('#mySlider').slidesjs({
            width: 380,
            height: 800,
            play: {
              active: true,
              effect: "slide",
              interval: 5000,
              auto: true,
              swap: false,
              pauseOnHover: false,
              restartDelay: 2500
            },
            pagination:false,
            navigation:false
          })


          $('#appMiddle').swipe({
            swipeLeft:function(event, direction, distance, duration, fingerCount) {},
            swipeRight:function(event, direction, distance, duration, fingerCount) {},
          })
        },0)
      },

      initialize: function () {

      },

      close: function () {
        this.remove();
        this.unbind();
      },

    });

    return Header;
  });
