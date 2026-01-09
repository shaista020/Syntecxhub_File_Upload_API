const File = require("../models/File");
const path = require("path");

// Upload file metadata to MongoDB
const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const newFile = new File({
      filename: req.file.originalname,
      path: req.file.path,
      url: fileUrl
    });

    await newFile.save();

    res.status(201).json({ message: "File uploaded successfully", file: newFile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all uploaded files
const getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { uploadFile, getFiles };
