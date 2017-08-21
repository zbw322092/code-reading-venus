# venus-dev-utils
### ./lib/parsedModules.js
Using `/\s+|,/` to separate modules string which typed by user.

Finally, returning a formatted modules array.

'home, account , qa deposit' => [home,account,qa,deposit]

### ./lib/checkRequiredFiles.js
`fs.accessSync`
`fs.access`
https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_access_path_mode_callback

> `fs.constants.F_OK` - path is visible to the calling process. This is useful for determining if a file exists, but says nothing about `rwx` permissions. Default if no mode is specified.
fs.constants.R_OK - path can be `read` by the calling process.
fs.constants.W_OK - path can be `written` by the calling process.
fs.constants.X_OK - path can be `executed` by the calling process. This has no effect on Windows (will behave like fs.constants.F_OK).

Notice:
`fs.accessSync`
> This **throws** if any accessibility checks fail, and **does nothing** otherwise.



path.dirname
path.basename

### ./lib/executeNodeScript.js
In this module, `cross-spawn` is required. The key point of `cross-spawn` is cross platform support. Its API is quite similar with native `child process` module.

This util file does one thing:
execute specified command using `spawn` child process.

We execute webpack related script using child process.


### ./lib/resolveApp.js
`fs.realpathSync(path[, options])`
https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_realpathsync_path_options

Returns the **resolved path**.

`process.cwd()`
https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_cwd

The process.cwd() method returns the **current working directory** of the Node.js **process**.

_resolveApp.js_ does two thing:
one, get **absloute path** of script working directory.
two, exports a function, which will accept a relative path and return a final path based on above absloute path.


### ./lib/WebpackDevServerUtils.js
#### `choosePort` method.
`detect` is a simple free port detector module.
The `Promise` instance in `choosePort` method, if a port number is accept, this port will be passed into `resolve` method.

`is-root` simply return whether this user is root user.

This method does following works:
1. detect whether given port is occpied
    yes => check free port
    no => use this given port

2. if given port is occpied, get a new port, and telling user(using `inquirer`), your given port is used by some command in some directory, whether to use this new free port.
  yes => use this new port
  no => `resolve null`

### ./lib/clearConsole.js
This module clear console by two steps:
one, using `process.platform` to estimate OS platform.
two, clear console by write specified string via `process.stdout`


### ./lib/getProcessForPort.js
`getProcessForPort` return a line of sentence which indicates which command execute in which directory. Or, if the given port is not occupied, return `null`.

In this module, we pass in a `port` number, then, this module check corresponding `tcp process id`. Using this `tcp process id` to get execute directory and execute command.
