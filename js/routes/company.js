define(['views/companyView', 'text!templates/company-view', 'collections/companies'], function(CompanyView, CompanyTemplate, CompaniesCollection) {
    var companyId = 0;
    var companiesFetched = function(companies) {
        var company = companies.get(companyId);
        var companyView = new CompanyView({
            template: CompanyTemplate,
            viewData: company
        });
    };
    var companiesFetchError = function(error) {
        console.log('Error while fetching company. Error: ' + error);
    };
    return function(id) {
        companyId = id;
        var companies = new CompaniesCollection();
        companies.fetch({
            success: companiesFetched,
            error: companiesFetchError
        });
    };
});