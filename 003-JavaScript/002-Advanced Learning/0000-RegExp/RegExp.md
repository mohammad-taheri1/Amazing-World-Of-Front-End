# RegExp
The RegExp object is used for matching text with a pattern.

## How to define

* ### Regular expression literal

    const re = /ab+c/;

* ### RegExp object constructor

    const re = new RegExp('ab+c');

****************
## Types
* ### [xyz] ~== [x-z] 
x , y , z

* ### [^xyz] ~== [^x-z] 
!x , !y , !z

* ### .
Matches any single character except line terminators

* ### \d
Matches any digit (Arabic numeral)

    /\d/ ~== [0-9]

* ### \D
 not \d 😁 -> `[^0-9]`

* ### \w
any alphanumeric character from the basic Latin alphabet, including the underscore 

    /\w/ ~== [A-Za-z0-9_]
* ### \W
not \w 😁 -> `[^A-Za-z0-9_]`

* ### \s
single white space character

* ### x|y
Matches either "x" or "y"

* ### {num}
indicates number
    
    \d{4} indicates a digit, four times



****************
## Flags

* ### //g 
Global search.

* ### //i
Case-insensitive search.

* ### //m
Multi-line search.