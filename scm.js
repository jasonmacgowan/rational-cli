const debug = require("debug")("RATIONAL.SCM");
const execa = require("execa");

require("dotenv").config();

const exe = process.env.RATIONAL_SCM;

/*
 * This project exists because the `scm` tool requires several flags to be
 * passed to every command. Here we bind environment variables to a flag as
 * a sort of tuple so we can pass them together as arguments with the spread
 * operator ...
 */
const repository = ["--repository-uri", process.env.RATIONAL_REPOSITORY];
const username = ["--username", process.env.RATIONAL_USERNAME];
const password = ["--password", process.env.RATIONAL_PASSWORD];

/**
 * Run commands against an `scm` binary
 *
 * @param  {...any} args
 */
exports.run = function run(...args) {
  debug(
    `running: ${exe} ${args
      .filter((x) => typeof x === "string" && x.length)
      .map((x) => `"${x}"`)
      .join(" ")}`
  );

  const { stdout, stderr } = execa(
    exe,
    args.filter((x) => typeof x === "string" && x.length)
  );
  stdout.pipe(process.stdout);
  stderr.pipe(process.stderr);
};

/**
 * Login to a Rational Team Concert repository
 */
exports.login = function login() {
  return exports.run("login", ...repository, ...username, ...password);
};

/**
 * Logout of a Rational Team Concert repository
 */
exports.logout = function logout() {
  return exports.run("logout", ...repository);
};

/**
 * List streams for a Rational Team Concert repository
 */
exports.listStreams = function listStreams(...args) {
  return exports.run("list", "stream", ...repository, ...username, ...args);
};
