const genPassword = () => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 10;
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
};
module.exports = genPassword;
