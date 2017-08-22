# venus-core-angular
## webpack/scripts
### serve.js


----------------------------------------------------------------
## webpack/config
### processArgs.js
This module using `nconf` to miantain a config file. One of the feature of `nconf` is **hierarchical configuration**.

In this module, config file hierarchy is
  `process.argv`
  `process.env`
  `environment.json`
  `venus.config.js`

### webpackModuleConfig.js
#### `webpackEntries` method
In this method, using `minimatch` to filter out matched entries.
Two groups are compared in `minimatch`:
1. The modules(either module name nor match pattern) typed by user, in command `venus serve -m "xxx yyy"`
2. `webpack/entry` object which is configed in `venus.config.js` file.

The matched entries are returned in an object.(key is `webpack/entry` object's key);

#### `webpackOutput` method
Using `processArgs` get config data: `version`, `host`, `port`, webpack `output` and `publicPath`.

Processing above config data by proper utils to make sure it in correct format.

Finally, return webpack `output` object, containing above obtained config data.





#### `getWebpackModuleConfig` method


### index.js
#### `getWebpackConfig` method
`webpack-config` module:
> Helps to load, extend and merge webpack configs
https://github.com/Fitbit/webpack-config

`webpack-config` module help us 
1. set variables which can be accessed in `Config`, using `environment.setAll` method.
2. `extend`, `merge` configuartions. Also, we can provide some default configs.

In `getWebpackConfig` method we extend/merge webpack config according to `webpackRoot` and `env` variables. Finally returning a `webpack config object`.



### env.js
The module does two thing:
1. detecting whether it is `prodution` env.
2. shorten env name. `production` => `prod` `development` => `dev`





----------------------------------------------------------------
## webpack/utils
### inquirer.js
This module exports an `inquirer.prompt` method and a `confirmAvailableModules` method.

`confirmAvailableModules` mainly does two thing:
one, get matched modules.
two, using `inquirer` to confirm the matched modules.

The `inquirer` answer and keys array of matched modules are passed into callback function.

