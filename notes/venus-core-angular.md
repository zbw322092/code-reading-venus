# venus-core-angular
## webpack/scripts
### serve.js


## webpack/config
### processArgs.js
This module using `nconf` to miantain a config file. One of the feature of `nconf` is **hierarchical configuration**.

In this module, config file hierarchy is
  `process.argv`
  `process.env`
  `environment.json`
  `venus.config.js`

### webpackModuleConfig.js
`webpackEntries`
In this method, using `minimatch` to filter out matched entries.
Two groups are compared in `minimatch`:
1. The modules(either module name nor match pattern) typed by user, in command `venus serve -m "xxx yyy"`
2. `webpack/entry` object which is configed in `venus.config.js` file.

The matched entries are returned in an object.(key is `webpack/entry` object's key);






## webpack/utils
### inquirer.js
This module exports an `inquirer.prompt` method and a `confirmAvailableModules` method.

`confirmAvailableModules` mainly does two thing:
one, get matched modules.
two, using `inquirer` to confirm the matched modules.

The `inquirer` answer and keys array of matched modules are passed into callback function.

