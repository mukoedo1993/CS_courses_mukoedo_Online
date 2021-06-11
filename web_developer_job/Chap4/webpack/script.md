```
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3$ cd webpack
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack$ npm install
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN travel-site@1.0.0 No repository field.
npm WARN travel-site@1.0.0 No license field.

added 1047 packages from 439 contributors and audited 1049 packages in 66.237s

85 packages are looking for funding
  run `npm fund` for details

found 35 vulnerabilities (33 moderate, 2 high)
  run `npm audit fix` to fix them, or `npm audit` for details
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack$ npm install webpack webpack-cli --save-dev
npm WARN travel-site@1.0.0 No repository field.
npm WARN travel-site@1.0.0 No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ webpack-cli@4.7.2
+ webpack@5.38.1
updated 2 packages and audited 1049 packages in 26.582s

80 packages are looking for funding
  run `npm fund` for details

found 35 vulnerabilities (33 moderate, 2 high)
  run `npm audit fix` to fix them, or `npm audit` for details
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack$ npm run build

> travel-site@1.0.0 build /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack
> webpack

assets by status 0 bytes [cached] 1 asset

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

ERROR in main
Module not found: Error: Can't resolve './app/assets/scripts/App.js' in '/home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack'
resolve './app/assets/scripts/App.js' in '/home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack'
  using description file: /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack/package.json (relative path: .)
    Field 'browser' doesn't contain a valid alias configuration
    using description file: /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack/package.json (relative path: ./app/assets/scripts/App.js)
      no extension
        Field 'browser' doesn't contain a valid alias configuration
        /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack/app/assets/scripts/App.js doesn't exist
      .js
        Field 'browser' doesn't contain a valid alias configuration
        /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack/app/assets/scripts/App.js.js doesn't exist
      .json
        Field 'browser' doesn't contain a valid alias configuration
        /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack/app/assets/scripts/App.js.json doesn't exist
      .wasm
        Field 'browser' doesn't contain a valid alias configuration
        /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack/app/assets/scripts/App.js.wasm doesn't exist
      as directory
        /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack/app/assets/scripts/App.js doesn't exist

webpack 5.38.1 compiled with 1 error and 1 warning in 847 ms
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! travel-site@1.0.0 build: `webpack`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the travel-site@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/zcw/.npm/_logs/2021-06-10T04_45_59_398Z-debug.log
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack$ npm run build

> travel-site@1.0.0 build /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack
> webpack

asset main.js 36 bytes [emitted] [minimized] (name: main)
./app/assets/scripts/App.js 35 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack 5.38.1 compiled with 1 warning in 801 ms
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack$ #webpack looked our App.js file, and bundle it, and create a new dist folder.
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack$ rm -r dist
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack$ npm run build

> travel-site@1.0.0 build /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack
> webpack

asset bundled.js 36 bytes [emitted] [minimized] (name: main)
./app/assets/scripts/App.js 35 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack 5.38.1 compiled with 1 warning in 1097 ms
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack$ npm run build

> travel-site@1.0.0 build /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack
> webpack

asset bundled.js 36 bytes [compared for emit] [minimized] (name: main)
./app/assets/scripts/App.js 35 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack 5.38.1 compiled with 1 warning in 745 ms
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack$ npm run build

> travel-site@1.0.0 build /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack
> webpack

asset bundled.js 39 bytes [emitted] [minimized] (name: main)
./app/assets/scripts/App.js 38 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack 5.38.1 compiled with 1 warning in 799 ms
(base) zcw@mukoedo1993:~/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack$ npm run build

> travel-site@1.0.0 build /home/zcw/CS_courses_mukoedo_Online/web_developer_job/Chap3/webpack
> webpack

asset bundled.js 1.3 KiB [emitted] (name: main)
./app/assets/scripts/App.js 38 bytes [built] [code generated]
webpack 5.38.1 compiled successfully in 118 ms
asset bundled.js 1.3 KiB [emitted] (name: main)
./app/assets/scripts/App.js 39 bytes [built] [code generated]
webpack 5.38.1 compiled successfully in 26 ms
```