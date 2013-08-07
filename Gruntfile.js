module.exports = function (grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-vows-runner');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: {
				options: {
					reporter: './node_modules/jshint-path-reporter',
					jshintrc: '.jshintrc'
				},
				src: [
					'Gruntfile.js',
					'index.js',
					'lib/**/*.js',
					'tests/*.js',
					'tests/fixtures*.js'
				]
			}
		},
		vows: {
			options: {
				reporter: 'spec'
			},
			pass: {
				src: ['tests/lib/**/*.js']
			}
		}
	});

	grunt.registerTask('default', ['test']);
	grunt.registerTask('build', ['jshint:all']);

	grunt.registerTask('test', ['build', 'vows:pass']);

};