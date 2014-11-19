define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/pages/boot.html',
  'slider',
  'ratchet',
  'swipe',
  'collagePlus',
  'removeWhitespace',
  'jqueryPicture'
  ], function ($, _, Backbone, bootTemplate,slidesjs,Swipe,collagePlus,removeWhitespace,picture) {
    var Boot = Backbone.View.extend({
      events: {
      },

      el: $('#appMiddle'),

      render: function () {
        var compiledTemplate = _.template(bootTemplate);
        this.$el.html(compiledTemplate);
          $('.Collage').removeWhitespace().collagePlus();
          setInterval(function(){
            $('.Collage img').each(function(index,value){
            var randomTag = Math.floor(Math.random() * 8) + 1
              if(index == randomTag){
                $(value).fadeOut(300, function(){
                  var randomImage = Math.floor(Math.random() * 35) + 1
                  $(this).attr('src','js/app/content/images/People/'+randomImage+'.jpg').bind('onreadystatechange load', function(){
                     if (this.complete) $(this).fadeIn(300);
                  });
               });
             }
            })
          },1800)

          //Loading Screen
          //Phase 1 :
          setTimeout(function(){
            $('.logo_holder img').animate({
              width:'21%',
              height:'12%',
            });

            $('.loader_cover').animate({
              width:'48%'
            })
          },1000)

          //Phase 2 :
          setTimeout(function(){
               $('.loader_cover').animate({
                 width:'0%'
               });
               $('.logo_holder img').animate({
                 left:'0px'
               });
          },2000)


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
