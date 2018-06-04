#! /usr/bin/env node
import opn = require('opn')
import * as readline from 'readline'
import { lookForExpression } from './utils'

const version = process.env.npm_package_version || 'Unknown'
const args = process.argv

function openWheel(values: string[]) {
  const parsedValues = values.map(
    (value, index) => `c${index+1}=${value}`
  )

  const url = 'http://wheeldecide.com/'

  const redirectUrl = `${url}?${parsedValues.join('&')}`

  console.log(`Openning ${redirectUrl} on your browser`)
  opn(redirectUrl)
  console.log(`See you anytime soon`)
  process.exit(0)
}

export function wheelDecideCli() {
  const wheelOptions: string[] = []

  lookForExpression(args, ['-h', '--help', 'help'], () => {
    console.log('I\'m a help option')
    process.exit(0)
  })

  lookForExpression(args, ['-v', '--version', 'version'], () => {
    console.log(version)
    process.exit(0)
  })


  const optionsPrompt = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Type and option: '
  })

  optionsPrompt.prompt()

  optionsPrompt.on('line', (line: string) => {
    const parsedLine = line !== ''
     ? line.trim().toLocaleLowerCase()
     : line

    switch (parsedLine) {
      case 'exit' || 'quit': {
        console.log('Come back anytime soon')
        process.exit(0)
        break
      }

      case 'help' || 'h': {
        console.log('[Type `exit` or `quit` to quit]')
        break
      }

      case '': {
        openWheel(wheelOptions)
        break
      }

      default: {
        wheelOptions.push(parsedLine)
        break
      }
    }

    optionsPrompt.prompt()
  }).on('close', () => {
    console.log('Come back anytime soon!')
    process.exit(0)
  })

}



wheelDecideCli()
