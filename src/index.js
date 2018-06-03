#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var commander = require("commander");
var version = process.env.npm_package_version || 'Unknown';
commander
    .version(version)
    .description('A Command Line interface for Wheel Decide [http://wheeldecide.com/]')
    .action(function () {
    console.log(chalk_1["default"].yellow('Hi There'));
});
