define(['views/companyListView', 'text!templates/company-list-view.html', 'collections/companies'], function(CompaniesListView, CompaniesListTemplate, CompaniesCollection) {
    var companiesFetched = function(companies) {
        var companiesListView = new CompaniesListView({
            template: CompaniesListTemplate,
            viewData: companies
        });
    };
    var companiesFetchError = function(error){
        console.log('Error while fetching companies. Error: ' + error);
    };
    return function () {
        var companies = new CompaniesCollection();
        companies.fetch({
            success: companiesFetched,
            error: companiesFetchError
        });
    };
});