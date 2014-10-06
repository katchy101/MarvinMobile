define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/static/footer.html'

], function ($, _, Backbone, headerTemplate, reccList, ResultsPage) {
    var Header = Backbone.View.extend({
        events: {
        },

        el: $('#appFooter'),

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