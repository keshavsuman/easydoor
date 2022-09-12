const s3fileUpload = require("../helpers/s3fileUpload");

module.exports.uploadMediaAndGenerateURL = async (req, res) => {
  try {
    const file = req.file;
    const fileName = file.key;
    const fileURL = `https://s3.ap-south-1.amazonaws.com/easydoorimages/${fileName}`;
    res.status(201).json({
      status: 201,
      message: "File uploaded successfully",
      data: fileURL,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
      data: null,
    });
  }
};
