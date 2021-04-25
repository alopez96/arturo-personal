// var requirejs = require("requirejs");

// var fs = requirejs("fs");
// console.log(fs);


requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    }
});

require(['node_modules/mailgun-js/lib/mailgun.js'], function (foo) {
    //foo is now loaded.
    // alert('mailgun is loaded', foo)
    console.log('mailgun', foo)
});

// Start the main app logic.
requirejs(['vanialla-tilt'],
function   (vanilla) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    console.log('vanilla', vanilla)
});