// Karma configuration
// Generated on Tue Apr 16 2013 11:03:43 GMT+0800 (CST)


// base path, that will be used to resolve files and exclude
basePath = '';


// frameworks to use
frameworks = ['mocha'];


// list of files / patterns to load in the browser
files = [
  {pattern: 'node_modules/chai/chai.js',include: true},
  'src/*.js',
  'test/*.js'
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
reporters = ['progress','junit','coverage'];

junitReporter = {
    // will be resolved to basePath (in the same way as files/exclude patterns)
    outputFile: 'report/test-results.xml'
};

preprocessors = {
    'src/*.js': 'coverage'
};

// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_DEBUG;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;


// plugins to load
plugins = [
  'karma-mocha',
  'karma-chrome-launcher',
  'karma-junit-reporter',
  'karma-coverage'
];
