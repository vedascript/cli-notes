import { addNoteToDb, getDb } from "./db.js";

export async function addNote(input) {
  const { content, tags } = input;

  const noteObj = {
    content,
    tags,
    id: Date.now(),
  };

  await addNoteToDb(noteObj);
  return noteObj;
}

export async function getNotes() {
  const notesDb = await getDb();
  return notesDb;
}
