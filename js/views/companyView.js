define(['handlebars'], function(Handlebars) {
    return Backbone.View.extend ({
        className: 'company',
        initialize: function(options) {
            this.parentSelector = options.parentSelector;
            this.template = Handlebars.compile(options.template);
            this.viewData = options.viewData;
            this.render();
        },
        events: {
            'click .select-company': 'onCompanySelected'
        },
        render: function() {
            this.$el.html(this.template(this.viewData.toJSON()));
            $(this.parentSelector).append(this.$el);
            return this;
        },
        onCompanySelected: function(event) {
            var companyId = $(event.currentTarget).closest('.company-view').data('companyId');
            console.log(companyId);
            //this.destroyView();
            //router.navigate('company/' + companyId, { trigger: true });
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