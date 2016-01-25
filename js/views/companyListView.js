define(['handlebars', 'views/companyView', 'text!templates/company-view'], function(Handlebars, CompanyView, CompanyTemplate) {
   return Backbone.View.extend({
      el: '.app-view',
      initialize: function(options) {
         this.template = Handlebars.compile(options.template);
         this.viewData = options.viewData;
         this.render();
      },
      render: function() {
         this.$el.html(this.template());
         this.viewData.each(function(company) {
            var companyView = new CompanyView({
               parentSelector: '.company-list-view',
               template: CompanyTemplate,
               viewData: company
            });
         });

         return this;
      },
      emptyView: function() {
         this.$el.empty().off(); /* off to unbind the events */
         this.stopListening();
         return this;
      },
      destroyView: function() {
         // Completely Unbind the View
         this.undelegateEvents();
         this.$el.removeData().unbind();

         // Remove view from DOM
         this.remove();
         Backbone.View.prototype.remove.call(this);

         return this;
      }
   });
});
