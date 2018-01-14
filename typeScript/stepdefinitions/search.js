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
const homePage_1 = require("../pages/homePage");
const bookingPage_1 = require("../pages/bookingPage");
const selenium_webdriver_1 = require("selenium-webdriver");
const { When, Then } = require("cucumber");
const { defineSupportCode } = require('cucumber');
const search = new homePage_1.SearchPageObject();
const booking = new bookingPage_1.BookingPageObject();
let EC = protractor_1.ExpectedConditions;
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
defineSupportCode(function ({ setDefaultTimeout }) {
    setDefaultTimeout(60 * 1000);
});
When(/^I log in$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(search.login));
    yield search.login.click();
    yield protractor_1.browser.wait(EC.visibilityOf(search.email));
    yield search.email.click();
    yield search.email.sendKeys('ryanairtest9@gmail.com');
    yield search.passwd.click();
    yield search.passwd.sendKeys('Ryanair!2#%&');
    yield search.loginBtn.click();
    yield protractor_1.browser.wait(EC.stalenessOf(search.email));
}));
When(/^I booking from "(.*?)" to "(.*?)" on "(.*?)"$/, (dep, arr, date) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(search.oneWayFlight), 2000);
    yield search.oneWayFlight.click();
    yield search.flyFrom.click();
    yield search.flyFrom.sendKeys(selenium_webdriver_1.Key.DELETE);
    yield search.flyFrom.sendKeys(dep);
    yield search.flyTo.click();
    yield search.flyTo.sendKeys(arr);
    yield search.flyTo.sendKeys(selenium_webdriver_1.Key.ENTER);
    yield protractor_1.element(protractor_1.by.css('[data-id="' + date + '"]')).click();
    yield search.agreeCheckBox.click();
    yield protractor_1.browser.wait(EC.visibilityOf(search.flyContinueBtn), 2000);
    yield search.flyContinueBtn.click();
    yield protractor_1.browser.wait(EC.stalenessOf(search.flyContinueBtn), 7000);
    yield expect(protractor_1.browser.getCurrentUrl()).to.eventually.equal("https://www.ryanair.com/ie/en/booking/home");
    yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Ryanair");
    yield protractor_1.browser.wait(EC.elementToBeClickable(booking.priceBtn), 7000);
    yield expect(booking.flyght.isDisplayed()).to.eventually.equal(true);
    yield booking.priceBtn.click();
    yield protractor_1.browser.wait(EC.elementToBeClickable(booking.standardBtn));
    yield booking.standardBtn.click();
    yield protractor_1.browser.wait(EC.stalenessOf(booking.standardBtn));
    yield protractor_1.browser.wait(EC.elementToBeClickable(booking.continueBtn));
    yield booking.continueBtn.click();
    yield protractor_1.browser.wait(EC.stalenessOf(booking.continueBtn), 7000);
    yield expect(protractor_1.browser.getCurrentUrl()).to.eventually.equal("https://www.ryanair.com/ie/en/booking/extras");
    yield protractor_1.browser.wait(EC.elementToBeClickable(booking.checkoutBtn));
    yield booking.checkoutBtn.click();
    yield protractor_1.browser.get("https://www.ryanair.com/ie/en/booking/payment");
    yield expect(protractor_1.browser.getCurrentUrl()).to.eventually.equal("https://www.ryanair.com/ie/en/booking/payment");
}));
