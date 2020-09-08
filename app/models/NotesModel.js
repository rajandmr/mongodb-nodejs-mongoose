const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", NotesSchema);
module.exports = Note;
