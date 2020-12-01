import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3 = new aws.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "challengesns",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
  limits: { fileSize: 1024 * 1024 * 20 },
});

export const uploadMiddleware = upload.single("file");

export const uploadController = (req, res) => {
  console.log(req);
  const {
    file: { location },
  } = req;
  res.json({ location });
};
