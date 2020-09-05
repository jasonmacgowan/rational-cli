const scm = require("scm");

async function main() {
  await scm.login();
  await scm.logout();
}

// $ node index.js
if (require.main === module) {
  main();
}
