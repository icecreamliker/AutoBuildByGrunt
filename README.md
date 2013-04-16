AutoBuildByGrunt
================

Build project for UnitedStack

[![Build Status](https://travis-ci.org/icecreamliker/AutoBuildByGrunt.png?branch=master)](https://travis-ci.org/icecreamliker/AutoBuildByGrunt)

##Features

* Support project building
* Support **Mocha**
* Support **Chai** (and **Should** on the way)
* Support **Karma**
* Support other common building features, like jshint, minify, uglify...

##Usage

If you wanna build the whole project, you can:
```
npm install
make test //or 'npm test' or 'grunt'
```
Further more, if you wanna just run the karma:
```
npm install
karma start
```

##NOTICE
* You should specify the environment variable(in order launch Chrome or other browsers), under Unix/Linux:

```
export CHROME_BIN=/opt/google/chrome/chrome # replace the url with your own url
```


##TODO
1. Modify script in order to pass the Travis CI building
2. Fix grunt-karma version spot
3. Add Should Assertion 
4. Optimise the project structure

