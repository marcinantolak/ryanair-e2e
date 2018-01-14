"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    baseUrl: "https://www.ryanair.com/ie/en/",
    capabilities: {
        browserName: "chrome",
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "../../features/*.feature",
    ],
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../stepdefinitions/*.ts", "../../support/*.ts"],
        strict: true,
        tags: "@ryanairScenario",
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    },
};
