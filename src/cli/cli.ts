import { Generator } from "../lib/generator"
import * as yargs from 'yargs';

const argv = yargs.options({
    filePath: { type: 'string', demandOption: true }
}).argv;

var gen = new Generator(argv.filePath);

gen.run();
