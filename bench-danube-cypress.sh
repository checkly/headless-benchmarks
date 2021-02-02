#!/bin/zsh

# test data for https://danube-webshop.herokuapp.com
export CYPRESS_USER_EMAIL=user@email.com
export CYPRESS_USER_PASSWORD=supersecure1

# format to only show total seconds
export TIMEFMT=$'%*E'

# run argument_1 times and print time result to file with id argument_2 
for i in {1..$1}; do
 { echo $i && time ./node_modules/.bin/cypress run --spec "scripts/cypress/danube-login.js" } 2>> results/performance/cypress-danube-$1-$2.txt
 echo $? >> results/exit-status/cypress-danube-$1-$2-status.txt
done
