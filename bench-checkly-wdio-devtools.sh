#!/bin/zsh

# format to only show total seconds
export TIMEFMT=$'%*E'

# run argument_1 times and print time result to file with id argument_2 
for i in {1..$1}; do
 { echo $i && time ./node_modules/.bin/wdio ./scripts/wdio-devtools/wdio.conf.js --spec ./scripts/wdio-selenium/test/specs/checkly-check.js } >> results/logs/wdio-devtools-checkly-$1-$2-log.txt 2>> results/performance/wdio-devtools-checkly-$1-$2.txt
 echo $? >> results/exit-status/wdio-devtools-checkly-$1-$2-status.txt
done
