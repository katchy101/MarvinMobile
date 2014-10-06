define([
  'jquery',      // lib/jquery/jquery
  'underscore',  // lib/underscore/underscore
  'backbone',    // lib/backbone/backbone
  'models/recc/recc'
], function ($, _, Backbone, Recommendation) {
    var reccList = Backbone.Collection.extend({
        url: '/Recommendation',

        model: Recommendation,
        initialize: function () {
           // console.log(Recommendation);
        }
    });
    return reccList;
});