var common = [
  '--logLevel=error',
  '--require ./tests/e2e/step-definitions/**/*.ts',
  '--require-module ts-node/register',
  `--format ${
  process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
  }`,
  '--format json:./reporters/cucumber-report.json',
].join(' ');

module.exports = {
  default: common,
};