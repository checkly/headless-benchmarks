#!/bin/zsh

# format to only show total seconds
export TIMEFMT=$'%*E'

# run argument_1 times and print time result to file with id argument_2 
for i in {1..$1}; do
 { echo $i && time ./scripts/wdio-selenium/node_modules/.bin/wdio ./scripts/wdio-selenium/wdio.conf.js } >> results/logs/wdio-webdriver-checkly-$1-$2-log.txt 2>> results/performance/wdio-webdriver-checkly-$1-$2.txt
 echo $? >> results/exit-status/wdio-webdriver-checkly-$1-$2-status.txt
done
