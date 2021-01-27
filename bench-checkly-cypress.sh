#!/bin/zsh

# format to only show total seconds
export TIMEFMT=$'%*E'

# run argument_1 times and print time result to file with id argument_2 
for i in {1..$1}; do
 { echo $i && time ./scripts/node_modules/.bin/cypress run } 2>> results/performance/cypress-checkly-$1-$2.txt
 echo $? >> results/exit-status/cypress-checkly-$1-$2-status.txt
done