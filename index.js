const os = require("os");
const scm = require("./scm");

function showHelp() {
  const commands = Object.keys(scm);

  process.stdout.write("Usage: node index.js <command> [args]\n\n");
  process.stdout.write("available commands are:\n");
  process.stdout.write(commands.map((command) => `\t${command}`).join(os.EOL));
  process.stdout.write(os.EOL);
}

async function main() {
  const command = process.argv[2];

  if (Object.prototype.hasOwnProperty.call(scm, command)) {
    if (typeof scm[command] === "function") {
      scm[command](...process.argv.slice(3));
      return;
    }
  }

  showHelp();
}

// $ node index.js
if (require.main === module) {
  main();
}
