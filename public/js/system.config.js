SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        // system js files
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // app files
        'startup': 'js/startup.js',
        'router': 'js/router.js'
    }
});

System.import('startup');
