# venus-cli
## index.js
`index.js` is the entry point.

### `yargs.command`
`yargs.command`
This method returns `yargs` object

``` javascript
const yargs = require('yargs');

const yargsObj = 
  yargs.command('*', 'start your server', () => {}, (argv) => {
    argv = JSON.stringify(argv);
    console.log(`argv: ${argv}`);
  });

console.log(yargsObj);

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
console.log(yargsObj.argv);

// execute `node index.js`, and result is
{ _: [], '$0': 'index.js' }

// execute `node index.js --test=111`, and result is
{ _: [], test: 111, '$0': 'index.js' }
```

Notice, value behind `--` is different from common command as following.

``` javascript
// execute `node index.js server`, and result is
argv: {"_":["server"],"$0":"index.js"}
{ _: [ 'server' ], '$0': 'index.js' }

// The yargs handler is triggered.
```

Variables behind `node index.js`(without `--`) will be push into `_` properties.
``` javascript
// execute `node index.js aaa bbb ccc`
{ _: [ 'aaa', 'bbb', 'ccc' ], '$0': 'index.js' }
```

### `.demandCommand([min=1], [minMsg])`
``` javascript
// example:
// provide a minimum demand and a minimum demand message
.demandCommand(1, 'You need at least one command before moving on')
```

## ./lib/serve.js
`builder` in `yargs.command` tells `yargs` how this `cmd` construct, with some proper options.
``` javascript
exports.builder = (yargs) => {
  yargs
    .example(chalk.black.bold('`$0 serve [-m="a,b,c"]` to start dev server with given modules'))
    .option('m', {
      alias: 'modules',
      demandOption: true,
      default: '',
      describe: chalk.black.bold('you should project modules')
    })
    .updateStrings({
      'Examples:': chalk.cyan.bold("Examples:")
    });
};
```

The above `yargs.example` info will be shown when we execute `venus serve -h` and this property is belongs to `serve` cmd only. So when we execute `venus -h`, the above example info will not shown up.


The result of `venus serve` will be passed to its handler, leading to following steps to be execute.
``` javascript
exports.handler = (argv) => {
  webpackTask.exec('serve', { modules: argv.modules });
}
```

### ./lib/webpackTask.js
webpackTask.js dose two things.
One, format and organise user input.
Two, executing script according to last step result.










