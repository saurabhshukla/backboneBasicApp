define(['routes/companies', 'routes/company'], function(companies, company) {
    var BackboneAppRouter = Backbone.Router.extend ({
       routes: {
           "": companies,
           "company/:id": company
       }
    });

    var router = new BackboneAppRouter();
    return router;
});