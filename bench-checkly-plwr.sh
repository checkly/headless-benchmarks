#!/bin/zsh

# format to only show total seconds
export TIMEFMT=$'%*E'

# run argument_1 times and print time result to file with id argument_2 
for i in {1..$1}; do
 { echo $i && time node --unhandled-rejections=strict scripts/plwr-checkly-check.js } 2>> results/performance/plwr-checkly-check-$1-$2.txt
 echo $? >> results/exit-status/plwr-checkly-$1-$2-status.txt
done
