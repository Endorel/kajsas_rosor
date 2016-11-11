module.exports = function(grunt) {
    //Configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            build: {
                src:'src/js/*.js',
                dest: 'js/script.min.js'
            },
            dev: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: 'all'
                },
                src: 'src/js/*.js',
                dest: 'js/script.min.js'
            }
        },
        sass: {
            dev: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'css/style.css': 'src/scss/style.scss'
                }
            },
            build: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/style.css':'src/scss/style.scss'
                }
            }

        },
        postcss: {
          options: {
              map: false,
              processors: [
                  require('pixrem')(),
                  require('autoprefixer')({browsers:'last 2 versions'}),
                  require('cssnano')()
              ]
          },
          build: {
              src: 'css/*.css'
          }
        },
        watch: {
            js: {
                files: ['src/js/*.js'],
                tasks: ['uglify:dev']
            },
            sass: {
                files: ['src/scss/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    //Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-postcss');

    //Register tasks
    grunt.registerTask('default', ['uglify:dev', 'sass:dev']);
    grunt.registerTask('build', ['uglify:build', 'sass:build', 'postcss:build']);
};