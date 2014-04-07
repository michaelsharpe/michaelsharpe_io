module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        'assets/js/app.js', 
        'Gruntfile.js',
        "app.js"
      ],
      options: {
        browser: true
      }
    },

    concat: {
      options: {
        separator: ';\n'
      },
      dist: {
        src: [
        'bower_components/jquery/dist/jquery.min.js',
        'assets/js/vendor/*.js',
        'assets/js/*.js'
        ],
        dest: 'public/js/app.js'
      }
    },

    uglify: {
      options: {
        mangle: false,
        preserveComments: "all"
      },
      build: {
        files: {
          'public/js/app.min.js': ['public/js/app.js']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'public/css/style.css' : 'assets/sass/application.scss'
        }
      }
    },

    cssmin: {
      minify: {
        files: {
          'public/css/style.min.css': [ 
            'public/css/style.css'
          ]  
        }
      }
    },

    watch: {
      options: {livereload: true},
      javascript: {
        files: ['assets/js/*.js'],
        tasks: ['jshint', 'concat']
        //Removed uglify from here, for now.
      },
      sass: {
        files: ['assets/sass/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['views/*.ejs']
      }
    },
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', [
    'jshint',
    'concat',
    'uglify',
    'sass',
    'cssmin',
  ]);

};