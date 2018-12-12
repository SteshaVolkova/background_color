module.exports = function(grunt) {
    // Project configuration.
	grunt.initConfig({
			//LESS COMPILER
		 less: {
				development: {
					 options: {
							compress: true,
							yuicompress: true,
							optimization: 2
					 },
					 files: {
						 "css.css": "css.less"
					 }
			 	}
			},
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
				//JS COMPILER
				uglify: {
					my_target: {
						files: {
							'fin.js': [
									'node_modules/jquery/dist/jquery.min.js',
									'node_modules/konami-code/KonamiCode.js',
									'node_modules/jbox/dist/jBox.min.js',
									'js/js.js'
							]
						}
					}
				}
	  });
    // plagins
		grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
		grunt.loadNpmTasks('grunt-contrib-uglify');
	    //list console command
		grunt.registerTask('default', ['less', 'cssmin','uglify']);
};
