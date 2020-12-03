# Headless benchmarks

Benchmarking scripts for Puppeteer, Playwright, WebDriverIO (running against standalone Selenium server and devtools).

## Running the benchmarks

Scripts are in place for each website+tool combination. You only need to provide a number of iterations and a label for your run, e.g.:

```./bench-danube-plwr.sh 1000 my-label```

Timings and logs for each run are stored under `results`.

WebDriverIO-based tests run against demo website by default. This can be changed by pointing to a different spec in the `wdio.conf.js` file, e.g.:

```
specs: ["./scripts/wdio-selenium/test/specs/benchmark-checkly-sync.js"],
```