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
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const search = new homePage_1.SearchPageObject();
let EC = protractor_1.ExpectedConditions;
Given(/^I am on ryanair page$/, () => __awaiter(this, void 0, void 0, function* () {
    yield expect(protractor_1.browser.getCurrentUrl()).to.eventually.equal("https://www.ryanair.com/ie/en/");
    yield expect(protractor_1.browser.getTitle()).to.eventually.equal("Official Ryanair website | Cheap flights from Ireland | Ryanair");
    yield protractor_1.element(protractor_1.by.css('cookie-pop-up>div>core-icon')).click();
}));
