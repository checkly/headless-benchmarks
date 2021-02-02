# Headless benchmarks

Benchmarking scripts for Puppeteer, Playwright, WebDriverIO (running against standalone Selenium server and devtools) and Cypress.

## Running the benchmarks

Scripts are in place for each website+tool combination. You only need to provide a number of iterations and a label for your run, e.g.:

```./bench-danube-plwr.sh 1000 my-label```

Timings and logs for each run are stored under `results`.

### Selecting which scenario to run

All automation scripts are included for each tool. Depending on the tool you run, you might need to adjust some config parameters to only run the scripts you are interested in.

#### Puppeteer and Playwright

tbd

#### WebDriverIO (Selenium and DevTools)

The `wdio.conf.js` file inside of each wdio folder contains the `specs` option. Use it to include which specs to run, e.g. for a complete suite running against Checkly: `specs: ["./scripts/wdio-selenium/test/specs/checkly-*.js"]`

#### Cypress

tbd

## Automation scripts

The goal is to have stable scripts that are as similar as possible across tools, i.e. scripts that perform the same high-level operations in the browser, regardless of the small differences under the hood (which are expected due to differences between the automation tools and APIs). 
