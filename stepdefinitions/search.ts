import { browser, element, by, ExpectedConditions } from "protractor";
import { SearchPageObject } from "../pages/homePage";
import { BookingPageObject } from "../pages/bookingPage";
import { Key } from "selenium-webdriver";
const { When, Then } = require("cucumber");
const {defineSupportCode} = require('cucumber');
const search: SearchPageObject = new SearchPageObject();
const booking: BookingPageObject = new BookingPageObject();
let EC = ExpectedConditions;
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 1000);
  });

When(/^I log in$/, async () => {
    await browser.wait(EC.visibilityOf(search.login));
    await search.login.click();
    await browser.wait(EC.visibilityOf(search.email));
    await search.email.click();
    await search.email.sendKeys('ryanairtest9@gmail.com');
    await search.passwd.click();
    await search.passwd.sendKeys('Ryanair!2#%&');
    await search.loginBtn.click();
    await browser.wait(EC.stalenessOf(search.email));
});

When(/^I booking from "(.*?)" to "(.*?)" on "(.*?)"$/, async (dep, arr, date) => {
    await browser.wait(EC.visibilityOf(search.oneWayFlight), 2000);
    await search.oneWayFlight.click();
    await search.flyFrom.click();
    await search.flyFrom.sendKeys(Key.DELETE);
    await search.flyFrom.sendKeys(dep);
    await search.flyTo.click();
    await search.flyTo.sendKeys(arr);
    await search.flyTo.sendKeys(Key.ENTER);
    await element(by.css('[data-id="' + date + '"]')).click();
    await search.agreeCheckBox.click();
    await browser.wait(EC.visibilityOf(search.flyContinueBtn), 2000);
    await search.flyContinueBtn.click();
    await browser.wait(EC.stalenessOf(search.flyContinueBtn), 7000);
    await expect(browser.getCurrentUrl()).to.eventually.equal("https://www.ryanair.com/ie/en/booking/home");
    await expect(browser.getTitle()).to.eventually.equal("Ryanair");
    await browser.wait(EC.elementToBeClickable(booking.priceBtn), 7000);
    await expect(booking.flyght.isDisplayed()).to.eventually.equal(true);
    await booking.priceBtn.click();
    await browser.wait(EC.elementToBeClickable(booking.standardBtn));
    await booking.standardBtn.click();
    await browser.wait(EC.stalenessOf(booking.standardBtn));
    await browser.wait(EC.elementToBeClickable(booking.continueBtn));
    await booking.continueBtn.click();
    await browser.wait(EC.stalenessOf(booking.continueBtn), 7000);
    await expect(browser.getCurrentUrl()).to.eventually.equal("https://www.ryanair.com/ie/en/booking/extras");
    await browser.wait(EC.elementToBeClickable(booking.checkoutBtn));
    await booking.checkoutBtn.click();
    await browser.get("https://www.ryanair.com/ie/en/booking/payment");
    await expect(browser.getCurrentUrl()).to.eventually.equal("https://www.ryanair.com/ie/en/booking/payment");
});