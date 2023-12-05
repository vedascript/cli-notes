import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "new <content>",
    "Create a new note",
    (yargs) => {
      return yargs.positional("create-note", {
        type: "string",
        description: "A command to create new note",
      });
    },
    (argv) => console.log("argv: ", argv.content)
  )
  .option("tags", {
    alias: "t",
    describe: "tags for the note.",
    type: "string",
  })
  .coerce("content", (arg) => {
    if (typeof arg !== "string") {
      throw new Error("Input must be string.");
    }
    return arg;
  })
  .fail((msg) => {
    if (msg) {
      console.error(msg);
      process.exit();
    }
  })
  .demandCommand(1)
  .parse();
