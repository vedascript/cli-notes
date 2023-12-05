import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { addNote, getNotes } from "./notes.js";

// create a new note.

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
    async (argv) => {
      const newNote = await addNote(argv);
      console.log("Note created: ", newNote);
    }
  )
  .option("tags", {
    alias: "t",
    describe: "tags for the note.(Comma separate for multiple)",
    type: "string",
  })
  .coerce("content", async (arg) => {
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
  .command(
    "get",
    "Get all notes",
    () => {},
    async () => {
      const notes = await getNotes();
      console.log(notes);
    }
  )
  .demandCommand(1)
  .parse();
