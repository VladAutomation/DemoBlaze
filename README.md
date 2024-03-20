# Description

Sample test automation project written with Cypress using Page Object Model and Cypress Commands. As a reporter, I also added *mochawesome report* to get the final report after all the tests were done.

I have created the following test files:
1. phonesOrder
2. laptopOrder

In the support folder, I have created the corresponding files for the pages the tests interact with, under the **Page_Objects** folder.


The first file execution follows a happy path, with a succesful order. The second file follows a failed order, by not providing enough data.

## Pre-requisites
- NPM and Node
- Visual Studio Code

## Installation
To run project: To install project dependencies, just type `npm install cypress --save-dev` on the project root.

## Run tests
In order to run all test files, type `npx cypress run`. At the end of the run, reports will be triggered, available in the **cypress/reports** folder.


