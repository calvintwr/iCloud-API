// Require function that already logs in and asks for the credentials if needed
const promptiCloud = require("../prompt-credentials");

(async () => {
  // Login to icloud and ask for new credentials if needed
  const myCloud = await promptiCloud();

  const folders = await myCloud.Mail.getFolders();

  const messages = (await myCloud.Mail.listMessages(folders[0], 1, 50)).messages;

  console.log("Flagging first message...");

  const flagChangset = await myCloud.Mail.flag([
    messages[0],
    //myMessages[1]
  ], "flagged");

  console.log(flagChangset);
})();
