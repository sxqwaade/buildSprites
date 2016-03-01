module.exports = function(grunt){
    grunt.registerTask('autoSprite','sprite',function(){
        var tasks = ['sprite'];

        var gruntCfg = grunt.file.readJSON('gruntCfg.json');
        var spriteConfig = gruntCfg.sprite;

        grunt.config.set("sprite",spriteConfig);
        grunt.task.run(tasks);
    });

    grunt.loadNpmTasks('grunt-spritesmith');
}