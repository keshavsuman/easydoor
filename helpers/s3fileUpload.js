const multer  = require('multer-s3');
const aws = require('aws-sdk');

aws.config.update({
    secretAccessKey: 'JuxbiiSwKfI+oOe15YAsnIjesWZL3SvEsDFW1f+5',
    accessKeyId: 'AKIASLGTXDIV2C4AT2ZY',
    region: 'ap-south-1'
});

module.exports = multer({
    storage: multerS3({
      s3: s3 = new aws.S3(),
      bucket: 'easydoorimages',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })
  