// Configuration for Cloudinary Access Through Multer

// Requiring necessary packages
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

// Defining the Clodinary Config Parameters from .env file
cloudinary.config({
  cloud_name: "dxhgvsse5",
  api_key: "452328774739453",
  api_secret: "9Qd421VE1eCSw1Ny45leF1Zc6PU",
});

// Setting up Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "To-Let-Globe-Dynamic-Blog",
    allowedFormats: ["jpeg", "jpg", "png", "webp"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
