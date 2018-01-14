"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class SearchPageObject {
    constructor() {
        this.login = protractor_1.element(protractor_1.by.css("#myryanair-auth-login>a>span"));
        this.email = protractor_1.element(protractor_1.by.name('emailAddress'));
        this.passwd = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.password"]'));
        this.loginBtn = protractor_1.element(protractor_1.by.css("signup-home-tabs>div:nth-child(2)>div>div>div>form>div:nth-child(5)>button-spinner>button"));
        this.oneWayFlight = protractor_1.element(protractor_1.by.css('div.flight-search-type-option.one-way'));
        this.flyFrom = protractor_1.element(protractor_1.by.css('[aria-labelledby="label-airport-selector-from"]'));
        this.flyTo = protractor_1.element(protractor_1.by.css('[aria-labelledby="label-airport-selector-to"]'));
        this.dateDay = protractor_1.element(protractor_1.by.css('[aria-label="Fly out: - DD"]'));
        this.dateMont = protractor_1.element(protractor_1.by.css('[aria-label="Fly out: - MM"]'));
        this.dateYear = protractor_1.element(protractor_1.by.css('[aria-label="Fly out: - YYYY"]'));
        this.flyContinueBtn = protractor_1.element(protractor_1.by.css('[ng-click="searchFlights()"]'));
        this.agreeCheckBox = protractor_1.element(protractor_1.by.css('div.col-tandc>div>label>span'));
    }
}
exports.SearchPageObject = SearchPageObject;
