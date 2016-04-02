module.exports = function(grunt) {

  grunt.initConfig({
    exec: {
      tests: {
        command: 'node_modules/jasmine-node/bin/jasmine-node tests --growl'
      }
    },
    watch: {
      exec: {
        files: ['src/**/*.js', 'tests/**/*.js'],
        tasks: ['exec'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', ['exec', 'watch']);

};
