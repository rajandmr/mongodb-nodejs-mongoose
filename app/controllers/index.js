const NotesModel = require('../models/NotesModel');

exports.findAll = async (req, res) => {
  try {
    const notes = await NotesModel.find({});
    res.send(notes);
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Some error occured while retrieving Notes',
    });
  }
};

exports.create = async (req, res) => {
  const Note = req.body;

  try {
    const NoteDoc = new NotesModel(Note);
    await NoteDoc.save();
    res.send(Note);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const Note = await NotesModel.findById(id);
    res.send(Note);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.update = async (req, res) => {
  const { ...data } = req.body;
  const result = await NotesModel.findOneAndUpdate(
    { _id: req.params.id },
    data,
    {
      new: true,
    }
  );

  res.send(result);
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    await NotesModel.findByIdAndDelete(req.params.id);

    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
