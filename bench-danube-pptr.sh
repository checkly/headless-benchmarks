#!/bin/zsh

# test data for https://danube-webshop.herokuapp.com
export USER_EMAIL=user@email.com
export USER_PASSWORD=supersecure1

# format to only show total seconds
export TIMEFMT=$'%*E'

# run argument_1 times and print time result to file with id argument_2 
for i in {1..$1}; do
 { echo $i && time node --unhandled-rejections=strict scripts/pptr-danube-login.js } 2>> results/performance/pptr-danube-login-$1-$2.txt
 echo $? >> results/exit-status/pptr-danube-$1-$2-status.txt
done
