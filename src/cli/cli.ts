import { run } from "../lib/generator";
import * as yargs from "yargs";

const argv = yargs.options({
    filePath: { type: "string", demandOption: true }
}).argv;

run(argv.filePath);
