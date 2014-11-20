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
  'jqueryPicture',
  'transit'
  ], function ($, _, Backbone, bootTemplate,slidesjs,Swipe,collagePlus,removeWhitespace,picture,transition) {
    var Boot = Backbone.View.extend({
      events: {
      },

      el: $('#appMiddle'),

      render: function () {

        var compiledTemplate = _.template(bootTemplate);
        this.$el.html(compiledTemplate);
        $('.Collage').removeWhitespace().collagePlus();

        $('.loader_cover').transition({
            opacity:100
        },function(){
          $('.login_area').transition({
            opacity:100
          });
        });

        setInterval(function(){
          $('.Collage img').each(function(index,value){
            var randomTag = Math.floor(Math.random() * 8) + 1
            if(index == randomTag){
              $(value).transition({
                opacity:0
              }, function(){
                  var randomImage = Math.floor(Math.random() * 35) + 1
                  $(this).attr('src','js/app/content/images/People/'+randomImage+'.jpg').bind('onreadystatechange load', function(){
                  if (this.complete) $(this).transition({
                    opacity:100
                  });
                });
              });
            }
          })
        },1000)

        //Loading Screen
        //Phase 1 :
         setTimeout(function(){
           $('.login_area').fadeOut(function(){
             $('.logo_holder img').transition({
               width:'21%',
               height:'12%',
             });
             $('.loader_cover').transition({
               width:'48%'
             })
           });
         },1000)
        //
        // //Phase 2 :
         setTimeout(function(){
              $('.loader_cover').transition({
                width:'0%'
              });
              $('.logo_holder img').transition({
                left:'0px'
              });
         },2000)

        //Phase 3 :
         setTimeout(function(){
           $('.Collage').transition({
             opacity: 0
           });
         },5500)
      },

      close: function () {
        this.remove();
        this.unbind();
      },

    });

    return Boot;
  }

);
