#!/bin/zsh

# test data for https://danube-webshop.herokuapp.com
export USER_EMAIL=user@email.com
export USER_PASSWORD=supersecure1

# format to only show total seconds
export TIMEFMT=$'%*E'

# run argument_1 times and print time result to file with id argument_2 
for i in {1..$1}; do
 { echo $i && time ./scripts/wdio-devtools/node_modules/.bin/wdio ./scripts/wdio-devtools/wdio.conf.js --spec ./scripts/wdio-devtools/test/specs/danube-login.js } >> results/logs/wdio-webdriver-danube-$1-$2-log.txt 2>> results/performance/wdio-webdriver-danube-$1-$2.txt
 echo $? >> results/exit-status/wdio-webdriver-danube-$1-$2-status.txt
done
