import { browser, element, by, ExpectedConditions } from "protractor";
import { SearchPageObject } from "../pages/homePage";
import { BookingPageObject } from "../pages/bookingPage";
import { Key } from "selenium-webdriver";
const { Then } = require("cucumber");
const {defineSupportCode} = require('cucumber');
const booking: BookingPageObject = new BookingPageObject();
let EC = ExpectedConditions;
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let title: any;

Then(/^I pay for booking with credit card details "(.*?)" expiry "(.*?)"-"(.*?)" and "(.*?)"$/, async (number, expM, expY, CVV) => {
    await expect(browser.getCurrentUrl()).to.eventually.equal("https://www.ryanair.com/ie/en/booking/payment");
    await browser.wait(EC.elementToBeClickable(booking.titleName), 7000);
    await booking.titleName.sendKeys('Mr');
    await booking.firstName.sendKeys('TestName');
    await booking.surname.sendKeys('TestSurname');
    await booking.mobileCountry.sendKeys('Ireland');
    await booking.mobileNum.sendKeys('15551000');
    await booking.cartdNumber.sendKeys(number);
    await booking.cardType.sendKeys('MasterCard');
    await booking.expMonth.sendKeys(expM);
    await booking.expYear.sendKeys(expY);
    await booking.cvvCode.sendKeys(CVV);
    await booking.cardHoldersName.sendKeys('TestName TestSurname');
    await booking.addressLine.sendKeys('test');
    await booking.city.sendKeys('test');
    await booking.payCheckBox.click();
    await booking.payBtn.click();
});

Then(/^I shold get declined message$/, async () => {
    await browser.wait(EC.visibilityOf(booking.errorTitte), 7000);
    await expect(booking.errorTitte.isDisplayed()).to.eventually.equal(true);
});

