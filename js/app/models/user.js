define([
  'jquery',     // lib/jquery/jquery
  'underscore', // lib/underscore/underscore
  'backbone'    // lib/backbone/backbone

], function ($, _, Backbone) {
    var Session = Backbone.Model.extend({
        defaults: {
            sessionId: "",
            location:  "",
            userName: "",
            password: "",
            userId: ""
        },

        isAuthorized: function () {
            return Boolean(this.get("sessionId"));
        }
    })

    return Session;
});