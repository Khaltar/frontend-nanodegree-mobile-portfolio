module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin: {
            dist: {
                src: 'src/index.html',
                dest: 'dist/index.html',
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }
        },
        cssmin: {
            dist: {
                src: 'src/css/style.css',
                dest: 'dist/css/style.css'
            }
        },
        imagemin: {
            dev: {
                options: {
                    optimizationLevel : 7
                },
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img'
                }]   
            }
        },
        uglify: {
            dist: {
                src: 'src/js/perfmatters.js',
                dest: 'dist/js/perfmatters.js'
            }
        },
        critical: {
            dev: {
                options: {
                    base: './',
                    css: [
                        'src/css/style.css']
                        ,
                    width: 320,
                    height: 70
                },
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        }  
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-critical');
    grunt.registerTask('default', ['critical','htmlmin','cssmin','uglify']);
    grunt.registerTask('dev', ['imagemin']);
}