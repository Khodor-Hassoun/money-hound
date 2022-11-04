const fs = require("fs");

function saveImage(baseImage) {
  /*path of the folder where your project is saved. (In my case i got it from config file, root path of project).*/
  const uploadPath = `C:/Users/khodor/Code/money-hound/backend`;
  //path of folder where you want to save the image.
  const localPath = `${uploadPath}/uploads/images/`;
  //Find extension of file
  const ext = baseImage.substring(
    baseImage.indexOf("/") + 1,
    baseImage.indexOf(";base64")
  );
  const fileType = baseImage.substring("data:".length, baseImage.indexOf("/"));
  //Forming regex to extract base64 data of file.
  const regex = new RegExp(`^data:${fileType}\/${ext};base64,`, "gi");
  //Extract base64 data.
  const base64Data = baseImage.replace(regex, "");
  const rand = Math.ceil(Math.random() * 1000);
  //Random photo name with timeStamp so it will not overide previous images.
  const filename = `Photo_${Date.now()}_${rand}.${ext}`;

  //Check that if directory is present or not.
  if (!fs.existsSync(`${uploadPath}/uploads/`)) {
    fs.mkdirSync(`${uploadPath}/uploads/`);
  }
  if (!fs.existsSync(localPath)) {
    fs.mkdirSync(localPath);
  }
  fs.writeFileSync(localPath + filename, base64Data, "base64");
  return { filename, localPath };
  // return filename;
}

module.exports = saveImage;
