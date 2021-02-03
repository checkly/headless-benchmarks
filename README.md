# Headless benchmarks

Benchmarking scripts for Puppeteer, Playwright, WebDriverIO (running against standalone Selenium server and devtools) and Cypress.

## Setup

Install the needed packages using `npm i`
For WebDriverIO Selenium runs you will also need to run `./node_modules/.bin/selenium-standalone install` 

## Running the benchmarks

Scripts are in place for each website+tool combination.

 You only need to provide a number of iterations and a label for your run, e.g.:

```./bench-danube-plwr.sh 1000 my-label```

Timings and logs for each run are stored under `results`.

### Selenium-based runs

Make sure you have a running Selenium server on your machine before kicking off Selenium scripts:

```./node_modules/.bin/selenium-standalone start```

### Environment variables

Depending on the scenario you decide to run, you will need to set certain environment variables.

Scripts running against Danube are already set up to export credentials for you as follows: 

```
export USER_EMAIL=user@email.com
export USER_PASSWORD=supersecure1
```

Scripts running against Checkly will require you to set the following:

```
export URL=https://app.checklyhq.com
export EMAIL=<your checkly email>
export PASSWORD=<your checkly password>
```

Additionally, the checkly-check scenario (check creation) will need the additional variable to be set to the id of a placeholder snippet created on Checkly:

```
export SNIPPET_ID=<your placeholder snippet id>
```

## Automation scripts

The goal is to have stable scripts that are as similar as possible across tools, i.e. scripts that perform the same high-level operations in the browser, regardless of the small differences under the hood (which are expected due to differences between the automation tools and APIs). 
