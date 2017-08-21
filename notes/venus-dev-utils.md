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



