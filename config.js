const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const path = require("path");
const jsonReports = process.cwd() + "./reports/json";
const Reporter = require("./support/reporter");

exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    baseUrl: "https://examplePage.com/",
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    capabilities: {
        browserName: "chrome"
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["./feature/*.feature"],
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        strict: true,
        format: 'json:./reports/json/cucumber_report.json',
        require: ["./stepDefinition/*.js", "./support/*.js"],
        },
    onComplete: () => {
        Reporter.createHTMLReport();
    },
};