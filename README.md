# Roman Numeral Converter

#### By Erica Wright, David Rolfs, 19 January 2017

## Description

A webpage that converts numbers between 1 and 3999 to Roman Numerals.

## Setup/Installation Requirements

* Copy clone link from github page.
* Open index.html in web browser
* Enter numbers into text field
* Click submit
* See results

## Converter Behavior-Driven Development

### Specs:

* The program should pop up an error is the submission is empty or not a number between 1-3999.

  #### _Input Example: notanumber_
  #### _*Output Example: "Please enter a number between 1-3999"*_

* The program takes the number inputted and does the following:

  1. Determines the number of thousands in the number by dividing the number by a thousand (ignoring decimals) and displaying that many "M" symbols.

    #### _Input Example: 3000_
    #### _*Output Example: MMM*_

  2. Determines the number of hundreds in the number by subtracting away the thousands and then dividing the remainder by 100. It then displays that many "C" symbols, unless the amount falls under other exclusion criteria.

  _Exclusion criteria:_
  **If the number of hundreds is less than 1, it does not display anything, if it is equal to four it displays CD, if it is equal or greater than five, it displays "D + the remaining amount of hundreds in Cs", if it is equal to 9 then it displays "CM".**

  #### _Input Example: 3400_
  #### _*Output Example: MMMCD*_

  3. Determines the number of tens in the number by subtracting away the thousands and hundreds, then dividing the remainder by 10. It then displays that many "X" symbols, unless the amount falls under other exclusion criteria.

  _Exclusion criteria:_
  **If the number of tens is less than 1, it does not display anything, if it is equal to four it displays XL, if it is equal or greater than five, it displays "L + the remaining amount of tens in Xs", if it is equal to 9 then it displays "XC".**

  #### _Input Example: 3450_
  #### _*Output Example: MMMCDL*_

  4. Determines the number of ones in the number by subtracting away the thousands, hundreds, and tens. It then displays that many "I" symbols, unless the amount falls under other exclusion criteria.

  _Exclusion criteria:_
  **If the number of ones is less than 1, it does not display anything, if it is equal to four it displays IV, if it is equal or greater than five, it displays "V + the remaining amount of ones in Is", if it is equal to 9 then it displays "IX".**

  #### _Input Example: 3457_
  #### _*Output Example: MMMCDLVII*_

## Known Bugs

None

## Support and contact details

If you experience any issues feel free to contact us at ericaw21@gmail.com or davidrolfs15@gmail.com

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

### License


Copyright (c) 2017 Erica Wright, David Rolfs
