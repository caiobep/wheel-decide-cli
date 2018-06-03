#! /usr/bin/env node
import chalk from 'chalk'
import * as commander from 'commander'

const version = process.env.npm_package_version || 'Unknown'


commander
  .version(version)
  .description('A Command Line interface for Wheel Decide [http://wheeldecide.com/]')
  .usage('[options]')

commander
  .command('')


commander.parse(process.argv)
