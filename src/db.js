import fs from "node:fs/promises";

const DB_PATH = new URL("../db.json", import.meta.url).pathname;

export async function getDb() {
  try {
    const fileData = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(fileData);
  } catch (err) {
    console.error("Failed to get notes collection: ", err);
  }
}

export async function saveDb(data) {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Failed to save note in DB: ", console.error);
  }
}

export async function addNoteToDb(note) {
  try {
    const fileData = await getDb();
    fileData.notes.push(note);

    await saveDb(fileData);
    return note;
  } catch (err) {
    console.error("Failed to add note: ", err);
  }
}
