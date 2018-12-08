module.exports = function(grunt) {
    // Project configuration.
	grunt.initConfig({
	  	// CSS COMPILER
        cssmin: {
          options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'fin.css': ['css.css', 'node_modules/jbox/dist/jBox.all.min.css']
            }
          }
        },
				concat: {
			    options: {
			      separator: ';',
			    },
			    dist: {
			      src: ['js/js.js', 'node_modules/jbox/dist/jBox.min.js', 'node_modules/jbox/dist/jBox.min.js', 'node_modules/konami-code/KonamiCode.js'],
			      dest: 'fin.js'
			    },
			  }
	  });
    // plagins
    grunt.loadNpmTasks('grunt-contrib-cssmin');
		grunt.loadNpmTasks('grunt-contrib-concat');
    //list console command
    grunt.registerTask('default', ['cssmin']);
		grunt.registerTask('concat', ['concat']);

};
