# venus-cli
## index.js
`index.js` is the entry point.

`yargs.command`
This method returns `yargs` object

``` javascript
const yargs = require('yargs');

const argv = 
  yargs.command('serve', 'start your server', () => {}, (argv) => {
    console.log(`argv: ${argv}`);
  });

console.log(argv);

// execute result
{ '$0': 'index.js',
  getContext: [Function],
  reset: [Function],
  resetOptions: [Function],
  parsed: false,
  boolean: [Function],
  array: [Function],
  number: [Function],
  normalize: [Function],
  count: [Function],
  string: [Function],
  requiresArg: [Function],
  skipValidation: [Function],
  nargs: [Function],
  choices: [Function],
  alias: [Function],
  defaults: [Function],
  default: [Function],
  describe: [Function],
  demandOption: [Function],
  coerce: [Function],
  config: [Function],
  example: [Function],
  command: [Function],
  commandDir: [Function],
  require: [Function],
  required: [Function],
  demand: [Function],
  demandCommand: [Function],
  getDemandedOptions: [Function],
  getDemandedCommands: [Function],
  implies: [Function],
  conflicts: [Function],
  usage: [Function],
  epilog: [Function],
  epilogue: [Function],
  fail: [Function],
  check: [Function],
  global: [Function],
  pkgConf: [Function],
  parse: [Function],
  _getParseContext: [Function],
  _hasParseCallback: [Function],
  options: [Function],
  option: [Function],
  getOptions: [Function],
  group: [Function],
  getGroups: [Function],
  env: [Function],
  wrap: [Function],
  strict: [Function],
  getStrict: [Function],
  showHelp: [Function],
  version: [Function],
  help: [Function],
  addHelpOpt: [Function],
  showHelpOnFail: [Function],
  exitProcess: [Function],
  getExitProcess: [Function],
  completion: [Function],
  showCompletionScript: [Function],
  getCompletion: [Function],
  locale: [Function],
  updateLocale: [Function],
  updateStrings: [Function],
  detectLocale: [Function],
  getDetectLocale: [Function],
  exit: [Function],
  _getLoggerInstance: [Function],
  _hasOutput: [Function],
  _setHasOutput: [Function],
  recommendCommands: [Function],
  getUsageInstance: [Function],
  getValidationInstance: [Function],
  getCommandInstance: [Function],
  terminalWidth: [Function],
  argv: [Getter],
  _parseArgs: [Function],
  _runValidation: [Function] }
```

Usually, `argv: [Getter]` is useful for us.

``` javascript
console.log(argv.argv);

// execute node index.js --serve=111, and result is
{ _: [], serve: 111, '$0': 'index.js' }
```



