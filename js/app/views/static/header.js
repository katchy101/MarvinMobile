define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/static/header.html'

], function ($, _, Backbone, headerTemplate ) {
    var Header = Backbone.View.extend({
        events: {
        },

        el: $('#appHeader'),

        render: function () {
            var compiledTemplate = _.template(headerTemplate);
            this.$el.html(compiledTemplate);
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