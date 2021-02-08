# Headless benchmarks

Benchmarking scripts for Puppeteer, Playwright, WebDriverIO (running against standalone Selenium server and devtools) and Cypress.

## Setup

### Local

Install the needed packages using `npm i`
For WebDriverIO Selenium runs you will also need to install and run the Selenium Standalone Server:
```
./node_modules/.bin/selenium-standalone install
./node_modules/.bin/selenium-standalone start
``` 

### For scripts running against Danube

[Danube](https://danube-webshop.herokuapp.com) is a fully static demo website, and needs no further setup to be run against.
Scripts running against Danube are already set up to export credentials for you as follows: 

```
export USER_EMAIL=user@email.com
export USER_PASSWORD=supersecure1
```

When running Cypress, remember to export the above variables with the `CYPRESS_` prefix added, e.g. `CYPRESS_USER_EMAIL=...`.

### For scripts running against Checkly

Before kicking off any benchmarks against Checkly, create a placeholder check, as well as a placeholder snippet (note the id of the snippet, which is displayed at the end of the URL on the snippet page, e.g. `https://app.checklyhq.com/snippets/6395`)

Scripts running against Checkly will require you to set the following:

```
export URL=https://app.checklyhq.com
export EMAIL=<your checkly email>
export PASSWORD=<your checkly password>
export SNIPPET_ID=<your placeholder snippet id>
```

When running Cypress, remember to export the above variables with the `CYPRESS_` prefix added, e.g. `CYPRESS_EMAIL=...`.

**Note: like most production web applications under active development, Checkly changes very often. Therefore, you might need to adjust your scripts (especially selectors) to reflect the latest changes.** 

## Running the benchmarks

Scripts are in place for each website+tool combination.

You only need to provide a number of iterations and a label for your run, e.g.:

```./bench-danube-plwr.sh 1000 my-label```

Timings and logs for each run are stored under `results`.

## Automation scripts

The goal is to have stable scripts that are as similar as possible across tools, i.e. scripts that perform the same high-level operations in the browser, regardless of the small differences under the hood (which are expected due to differences between the automation tools and APIs). 
