#!/usr/bin/env node
import program from 'commander';

program
  .version('1.0.0')
  .usage('<url>')
  .option('-f', '--format <type>', "format in which list to be saved")
  .option('-o', '--output <file>', "name of file to be saved")
  .action((url, options) => {
    console.log("========out", url, options)
  })
  .parse(process.argv);