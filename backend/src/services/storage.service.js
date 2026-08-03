async function uploadFile(file, fileName) {
  const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;

  if (!publicKey || !privateKey || !urlEndpoint) {
    console.warn("ImageKit keys missing — uploadFile will return a mock result in development.");
    return {
      fileId: null,
      url: "",
      name: fileName,
      isMock: true,
    };
  }

  const ImageKit = require("imagekit");
  const imagekit = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
  });

  const result = await imagekit.upload({
    file: file,
    fileName: fileName,
  });

  return result;
}

module.exports = {
  uploadFile,
};
