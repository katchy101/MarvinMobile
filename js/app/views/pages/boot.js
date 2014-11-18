define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/pages/boot.html',
  'slider',
  'ratchet',
  'swipe',
  'collagePlus'
  ], function ($, _, Backbone, bootTemplate,slidesjs,Swipe,collagePlus ) {
      var Boot = Backbone.View.extend({
        events: {
        },

        el: $('#appMiddle'),

        render: function () {
          var compiledTemplate = _.template(bootTemplate);
          this.$el.html(compiledTemplate);
          setTimeout(function(){
              $('.Collage').collagePlus();
          },1)
        },

        initialize: function () {

        },

        close: function () {
          this.remove();
          this.unbind();
        },

      });

      return Boot;
    }

);
