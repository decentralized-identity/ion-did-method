#!/usr/bin/env node
// NOTE: MUST keep the line above even so `npm i` will install the CLI correctly across all operating systems. 

import * as yargs from 'yargs';
import OperationCommand from './OperationCommand';

// tslint:disable-next-line: no-unused-expression
yargs
  .scriptName('ion') // Make usage help print 'ion' instead 'index.js'.
  .usage('Usage: $0 <command> [options]')
  .demandCommand(1, 'A <command> is not specified.') // Requires a command to be specified.
  .command('operation', 'Generates a new <create|update|recover|deactivate> operation.', (yargs) => {
    yargs
      .usage('Usage: $0 operation <create|update|recover|deactivate> [options]')
      .demandCommand(1, 'An <operation type> is not specified.') // Requires a sub-command (operation type) to be specified.
      .command('create', 'Generates a create operation.', async () => {
        await OperationCommand.handleCreate();
      })
      .command('update', 'Generates an update operation.', () => {
        console.log('To be implemented.');
      })
      .command('recover', 'Generates a recover operation.', () => {
        console.log('To be implemented.');
      })
      .command('deactivate', 'Generates a deactivate operation.', () => {
        console.log('To be implemented.');
      })
      .updateStrings({
        'Commands:': 'Operation type:'
      })
      .wrap(null) // NO
      .strict(); // Requires the sub-command must be one of the explicitly defined sub-commands.
  })
  .command('resolve', 'Resolves an ION DID.', () => {
    console.log('To be implemented.');
  })
  .strict() // Requires the command must be one of the explicitly defined commands.
  .argv;

// const argv = yargs
//   .scriptName('ion') // Make usage help print 'ion' instead 'index.js'.
//   .usage('Usage: $0 <command> [options]')
//   .demandCommand(1, 'A <command> is not supplied.')
//   .command('count', 'Count the lines in a file')
//   .example('$0 count -f foo.js', 'count the lines in the given file')
//   .alias('f', 'file')
//   .nargs('f', 1)
//   .describe('f', 'Load a file')
//   .demandOption(['f'])
//   .help('h')
//   .alias('h', 'help')
//   .epilog('copyright 2019')
//   .argv;

//   console.log(argv.$0);

// yargs
//   .demandCommand(1, 'A <command> is not supplied.')
//   .usage('Usage: $0 <command> [options]')
//   .command({
//     command: 'generate [moduleType] [moduleNames...]',
//     aliases: ['g'],
//     describe: 'Generates a resource',
//     handler: parsed => console.log('your handler goes here', parsed),
//     builder: {
//       moduleType: {
//         demand: true,
//         choices: ['routed', 'stateful'] as const,
//         default: 'routed',
//       },
//       moduleNames: {
//         demand: true,
//         array: true,
//       },
//     },
//   })
//   .help('h')
//   .alias('h', 'help')
//   .parse(process.argv.slice(2))
