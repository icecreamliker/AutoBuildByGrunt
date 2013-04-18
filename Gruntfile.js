'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title %> */\n',
    // Task configuration.
    clean: {
      files: ['dist', 'report', 'coverage']
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/*.js'],
        dest: 'dist/managed.js'
      },
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/managed.min.js'
      },
    },
 //   qunit: {
 //    files: ['test/**/*.html']
 //   },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    less: {
      production: {
        options: {
          paths: ["assets/css"],
          yuicompress: true
        },
        files: {
          "dist/index.min.css": "src/index.css"
        }
      }
    },
    jshint: {
      gruntfile: {
        options: {
          es5: true,    
          node: true
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
      //    jshintrc: 'src/.jshintrc',
          browser: true,
          devel: true,
          node: true,
          strict: false  
        },
        src: ['src/**/*.js']
      },
      test: {
        options: {
       //   jshintrc: 'test/.jshintrc'
          browser: true,
          devel: true,
          node: true,
          strict: false
        },
        src: ['test/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
//  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-karma-0.9.1'); 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', ['jshint', 'clean', 'concat', 'uglify', 'less', 'karma']);
//    grunt.registerTask('yaoli', ['karma']);
};
