#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const commander = require("commander");
const version = process.env.npm_package_version || 'Unknown';
commander
    .version(version)
    .description('A Command Line interface for Wheel Decide [http://wheeldecide.com/]')
    .action(() => {
    console.log(chalk_1.default.yellow('Hi There'));
});
