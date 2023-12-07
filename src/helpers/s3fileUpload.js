const multerS3 = require("multer-s3");
const multer = require("multer");
const aws = require("aws-sdk");

aws.config.update({
  secretAccessKey: "JuxbiiSwKfI+oOe15YAsnIjesWZL3SvEsDFW1f+5",
  accessKeyId: "AKIASLGTXDIV2C4AT2ZY",
  region: "ap-south-1",
});

module.exports = multer({
  storage: multerS3({
    s3: (s3 = new aws.S3()),
    bucket: "matchkro",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(
        null,
        Date.now().toString() + "." + file.originalname.split(".").pop()
      );
    },
  }),
});
