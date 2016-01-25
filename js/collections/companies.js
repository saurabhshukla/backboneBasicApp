define(['constants/urls', 'models/company'], function(urls, Company) {
    return Backbone.Collection.extend ({
        url: urls.companies,
        model: Company
    });
});