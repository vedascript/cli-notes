import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command("t <text>", "", () => console.log("printing"))
  .demandCommand(1)
  .parse();
