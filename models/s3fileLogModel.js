const mongoose = require('mongoose');

const s3filelogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    fileName: {
        type: String,
    },
    fileUrl: {
        type: String,
    },
    fileType: {
        type: String,
    },
    fileSize: {
        type: Number,
    },

});
module.exports = mongoose.model('s3fileLog',s3filelogSchema);