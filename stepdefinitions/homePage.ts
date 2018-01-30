import { browser, element, by, ExpectedConditions } from "protractor";
import { SearchPageObject } from "../pages/homePage";
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: SearchPageObject = new SearchPageObject();
let EC = ExpectedConditions;

Given(/^I am on ryanair page$/, async () => {
    await expect(browser.getCurrentUrl()).to.eventually.equal("https://www.ryanair.com/ie/en/");
    await expect(browser.getTitle()).to.eventually.equal("Official Ryanair website | Cheap flights from Ireland | Ryanair");
    await element(by.css('div.cookie-popup__close-btn>core-icon')).click();
});