#!/bin/zsh

# format to only show total seconds
export TIMEFMT=$'%*E'

# run argument_1 times and print time result to file with id argument_2 
for i in {1..$1}; do
 { echo $i && time ./node_modules/.bin/jest --silent scripts/pptr-checkly-suite.spec.js } 2>> results/performance/pptr-checkly-suite-$1-$2.txt
 echo $? >> results/exit-status/pptr-checkly-suite-$1-$2-status.txt
done
