exports.config = {
    directConnect: true,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    specs: ['test/*.js'],
    baseUrl: 'https://www.ryanair.com/ie/en/',
    framework: 'jasmine',

    capabilities: {
      browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
        args: [
            '--disable-infobars',
            '--disable-extensions',
            'verbose',
            '--start-maximized'
        ],
            prefs: {
            'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false
        }
    }
},

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        defaultTimeoutInterval: 50000
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
    },

    useAllAngular2AppRoots: true
};