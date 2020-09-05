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
  debug(`running: ${exe} ${args.map((x) => `"${x}"`)}`);

  return execa(exe, args);
};

/**
 * Login to a Rational Team Concert repository
 */
exports.login = async function login() {
  const { stdout } = await exports.run("login", ...repository, ...username, ...password);

  return stdout;
};

/**
 * Logout of a Rational Team Concert repository
 */
exports.logout = async function logout() {
  const { stdout } = await exports.run("logout", ...repository, ...username);

  return stdout;
};
