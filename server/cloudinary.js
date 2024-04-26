const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.eventNames.CLOUD_NAME,
  api_key: process.eventNames.API_KEY,
  api_secret: process.eventNames.API_SECRET,
});

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}

module.exports = { handleUpload };
