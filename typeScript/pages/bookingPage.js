"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class BookingPageObject {
    constructor() {
        this.priceBtn = protractor_1.element(protractor_1.by.css('div.flight-header__min-price.hide-mobile>flights-table-price>div>div'));
        this.standardBtn = protractor_1.element(protractor_1.by.css('div.flights-table-fares__fare.fare-select.standard>div.flights-table-fares__fare-price>div'));
        this.continueBtn = protractor_1.element(protractor_1.by.css('[id="continue"]'));
        this.checkoutBtn = protractor_1.element(protractor_1.by.css('[ng-click="$ctrl.onContinueBtnClick()"]'));
        this.flyght = protractor_1.element(protractor_1.by.css('[class="flight-header flight-header__notice"]'));
        this.popUpClose = protractor_1.element(protractor_1.by.css('[class="popup-msg__button popup-msg__button--cancel"]'));
        this.titleName = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.pax.name.title"]'));
        this.firstName = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.pax.name.first"]'));
        this.surname = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.pax.name.last"]'));
        this.mobileCountry = protractor_1.element(protractor_1.by.css('[ng-model="ctrl.selectedCountry"]'));
        this.mobileNum = protractor_1.element(protractor_1.by.css('[ng-model="ctrl.model.number"]'));
        this.cartdNumber = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.cardModel.cardNumber"]'));
        this.cardType = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.cardModel.cardType"]'));
        this.expMonth = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.cardModel.expiry.month"]'));
        this.expYear = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.cardModel.expiry.year"]'));
        this.cvvCode = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.cardModel.securityCode"]'));
        this.cardHoldersName = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.cardModel.cardHolderName"]'));
        this.payCheckBox = protractor_1.element(protractor_1.by.css('div.cta>div>label>span>core-icon>div>svg'));
        this.payBtn = protractor_1.element(protractor_1.by.css('[class="core-btn-primary core-btn-medium"]'));
        this.addressLine = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.model.addressLine1"]'));
        this.city = protractor_1.element(protractor_1.by.css('[ng-model="$ctrl.model.city"]'));
        this.errorTitte = protractor_1.element(protractor_1.by.xpath('//*[@id="checkout"]/div/form/div[1]/div[2]/div[2]/div[4]/div/div[2]/prompt/div[1]'));
    }
}
exports.BookingPageObject = BookingPageObject;
