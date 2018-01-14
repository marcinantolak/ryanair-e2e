"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const bookingPage_1 = require("../pages/bookingPage");
const { Then } = require("cucumber");
const { defineSupportCode } = require('cucumber');
const booking = new bookingPage_1.BookingPageObject();
let EC = protractor_1.ExpectedConditions;
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let title;
Then(/^I pay for booking with credit card details "(.*?)" expiry "(.*?)"-"(.*?)" and "(.*?)"$/, (number, expM, expY, CVV) => __awaiter(this, void 0, void 0, function* () {
    yield expect(protractor_1.browser.getCurrentUrl()).to.eventually.equal("https://www.ryanair.com/ie/en/booking/payment");
    yield protractor_1.browser.wait(EC.elementToBeClickable(booking.titleName), 7000);
    yield booking.titleName.sendKeys('Mr');
    yield booking.firstName.sendKeys('TestName');
    yield booking.surname.sendKeys('TestSurname');
    yield booking.mobileCountry.sendKeys('Ireland');
    yield booking.mobileNum.sendKeys('15551000');
    yield booking.cartdNumber.sendKeys(number);
    yield booking.cardType.sendKeys('MasterCard');
    yield booking.expMonth.sendKeys(expM);
    yield booking.expYear.sendKeys(expY);
    yield booking.cvvCode.sendKeys(CVV);
    yield booking.cardHoldersName.sendKeys('TestName TestSurname');
    yield booking.addressLine.sendKeys('test');
    yield booking.city.sendKeys('test');
    yield booking.payCheckBox.click();
    yield booking.payBtn.click();
}));
Then(/^I shold get declined message$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(booking.errorTitte), 7000);
    yield expect(booking.errorTitte.isDisplayed()).to.eventually.equal(true);
}));
