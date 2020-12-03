exports.config = {
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless"],
      },
    },
  ],
  runner: "local",
  specs: ["./scripts/wdio-devtools/test/specs/benchmark-danube-sync.js"],
  maxInstances: 1,
  logLevel: "info",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 30000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 0,
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
