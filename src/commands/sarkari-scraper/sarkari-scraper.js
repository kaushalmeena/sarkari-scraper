#!/usr/bin/env node
import program from 'commander';

program
  .version('1.0.0')
  .command('list <domain>', 'fetch list of jobs from specified domain')
  .command('job <url>', 'scrap job data from specified url.')
  .parse(process.argv);