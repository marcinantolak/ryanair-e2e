import { $, element, by, ElementFinder } from "protractor";

export class SearchPageObject {
    public login: ElementFinder = element(by.css("#myryanair-auth-login>a>span"));
    public email: ElementFinder = element(by.name('emailAddress'));
    public passwd: ElementFinder = element(by.css('[ng-model="$ctrl.password"]'));
    public loginBtn: ElementFinder = element(by.css("signup-home-tabs>div:nth-child(2)>div>div>div>form>div:nth-child(5)>button-spinner>button"));
    public oneWayFlight: ElementFinder = element(by.css('div.flight-search-type-option.one-way'));
    public flyFrom: ElementFinder = element(by.css('[aria-labelledby="label-airport-selector-from"]'));
    public flyTo: ElementFinder = element(by.css('[aria-labelledby="label-airport-selector-to"]'));
    public dateDay: ElementFinder = element(by.css('[aria-label="Fly out: - DD"]'));
    public dateMont: ElementFinder = element(by.css('[aria-label="Fly out: - MM"]'));
    public dateYear: ElementFinder = element(by.css('[aria-label="Fly out: - YYYY"]'));
    public flyContinueBtn: ElementFinder = element(by.css('[ng-click="searchFlights()"]'));
    public agreeCheckBox: ElementFinder = element(by.css('div.col-tandc>div>label>span'));
}
