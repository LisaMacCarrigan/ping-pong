# _Ping Pong_

#### _An application that takes a number from a user and returns a range of numbers, 08.19.2016_

#### By _**Lisa MacCarrigan**_

## Description

_This is a web application that takes a number from a user and returns a range of numbers from 1 to the chosen number with a few exceptions._

## Specifications

#### 1. Do nothing to non-numeric input (i.e. letters and special characters).

* Example Input: "a" or "!"
* Example Output: "Please enter a number (must be greater than 0)"

#### 2. Do nothing to numbers less than 1.

* Example Input: 0
* Example Output: "Please enter a number (must be greater than 0)"

#### 3. The program takes a number from a user and returns a range of numbers from 1 to the chosen number.

* Example Input: 2
* Example Output: 1, 2

#### 4. Numbers divisible by 3 are replaced with "ping".

* Example Input: 3
* Example Output: 1, 2, ping

#### 5. Numbers divisible by 5 are replaced with "pong".

* Example Input: 5
* Example Output: 1, 2, ping, 4, pong

#### 6. Numbers divisible by 15 are replaced with "ping-pong".

* Example Input: 15
* Example Output: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, PING-PONG

#### 7. Numbers other than 3, 5, and 15 are output, unless they are also divisible by 3, 5, or 15 - in those instances they would be replaced with the appropriate string.

* Example Input #1: 9
* Example Output #1: 1, 2, ping, 4, pong, ping, 7, 8, ping
* Example Input #2: 16
* Example Output #2: 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, PING-PONG, 16

## Setup/Installation Requirements

* Clone this repository
* If editing, open project directory in Code Editor of choice
* If viewing, open .html file(s) in a web browser
* Link to GitHub pages site: https://lisamaccarrigan.github.io/ping-pong

## Known Bugs

_No known bugs_

## Support and contact details

For any questions or comments, please email: Lisa.MacCarrigan@gmail.com

## Technologies Used

HTML, CSS, JavaScript, jQuery version 3.1.0, Bootstrap version 3.3.7.

### License

*This application is licensed under the MIT License*

Copyright (c) 2016 **_Lisa MacCarrigan_**
