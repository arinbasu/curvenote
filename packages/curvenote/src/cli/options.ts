import { Option } from 'commander';

export function makeYesOption() {
  return new Option('-y, --yes', 'Use the defaults and answer "Y" to confirmations').default(false);
}

export function makeDomainOption() {
  return new Option(
    '--domain <string>',
    'Specify a custom domain for curve.space deployment',
  ).default(undefined);
}

export function makeBranchOption() {
  return new Option(
    '--branch <branch>',
    'Branch to clone from git@github.com:curvenote/curvenote.git',
  ).default('main');
}

export function makeCleanOption() {
  return new Option('-c, --clean', 'Remove content so that it is rebuilt fresh').default(false);
}

export function makeHeadlessOption() {
  return new Option(
    '--headless',
    'Run the server in headless mode, with only the content server started',
  ).default(false);
}

export function makeZipOption() {
  return new Option('--zip', 'Zip tex ouput folder').default(false);
}

export function makeForceOption() {
  return new Option('-f, --force', 'Remove the build directory and re-install').default(false);
}

export function makeKeepHostOption() {
  return new Option(
    '--keep-host',
    'The HOST environment variable is changed to "localhost" by default. This flag uses the original environment variable.',
  ).default(false);
}

export function makeCIOption() {
  return new Option(
    '-ci, --ci', // Must have both!
    'Perform a minimal build, for use on Continuous Integration (CI)',
  ).default(false);
}
export function makeStrictOption() {
  return new Option('--strict', 'Summarize build warnings and stop on any errors.').default(false);
}
export function makeCheckLinksOption() {
  return new Option('--check-links', 'Check all links to websites resolve.').default(false);
}
export function makeWriteTocOption() {
  return new Option(
    '--write-toc',
    'Generate editable _toc.yml file for project if it does not exist',
  ).default(false);
}

export function makePdfOption(verb: string) {
  return new Option('--pdf', `${verb} PDF output`).default(false);
}

export function makeTexOption(verb: string) {
  return new Option('--tex', `${verb} Tex outputs`).default(false);
}

export function makeDocxOption(verb: string) {
  return new Option('--word, --docx', `${verb} Docx output`).default(false);
}

export function makeSiteOption(verb: string) {
  return new Option('--site', `${verb} MyST site content`).default(false);
}
