import { $, element, by, ElementFinder } from "protractor";

export class BookingPageObject {
    public priceBtn: ElementFinder = element(by.css('div.flight-header__min-price.hide-mobile>flights-table-price>div>div'));
    public standardBtn: ElementFinder = element(by.css('div.flights-table-fares__fare.fare-select.standard>div.flights-table-fares__fare-price>div'));
    public continueBtn: ElementFinder = element(by.css('[id="continue"]'));
    public checkoutBtn: ElementFinder = element(by.css('[ng-click="$ctrl.onContinueBtnClick()"]'));
    public flyght: ElementFinder = element(by.css('[class="flight-header flight-header__notice"]'));
    public popUpClose: ElementFinder = element(by.css('[class="popup-msg__button popup-msg__button--cancel"]'));
    public titleName: ElementFinder = element(by.css('[ng-model="$ctrl.pax.name.title"]'));
    public firstName: ElementFinder = element(by.css('[ng-model="$ctrl.pax.name.first"]'));
    public surname: ElementFinder = element(by.css('[ng-model="$ctrl.pax.name.last"]'));
    public mobileCountry: ElementFinder = element(by.css('[ng-model="ctrl.selectedCountry"]'));
    public mobileNum: ElementFinder = element(by.css('[ng-model="ctrl.model.number"]'));
    public cartdNumber: ElementFinder = element(by.css('[ng-model="$ctrl.cardModel.cardNumber"]'));
    public cardType: ElementFinder = element(by.css('[ng-model="$ctrl.cardModel.cardType"]'));
    public expMonth: ElementFinder = element(by.css('[ng-model="$ctrl.cardModel.expiry.month"]'));
    public expYear: ElementFinder = element(by.css('[ng-model="$ctrl.cardModel.expiry.year"]'));
    public cvvCode: ElementFinder = element(by.css('[ng-model="$ctrl.cardModel.securityCode"]'));
    public cardHoldersName: ElementFinder = element(by.css('[ng-model="$ctrl.cardModel.cardHolderName"]'));
    public payCheckBox: ElementFinder = element(by.css('div.cta>div>label>span>core-icon>div>svg'));
    public payBtn: ElementFinder = element(by.css('[class="core-btn-primary core-btn-medium"]'));
    public addressLine: ElementFinder = element(by.css('[ng-model="$ctrl.model.addressLine1"]'));
    public city: ElementFinder = element(by.css('[ng-model="$ctrl.model.city"]'));
    public errorTitte: ElementFinder = element(by.xpath('//*[@id="checkout"]/div/form/div[1]/div[2]/div[2]/div[4]/div/div[2]/prompt/div[1]'));
}