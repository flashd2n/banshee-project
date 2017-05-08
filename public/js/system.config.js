SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        // system js files
        'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // app files
        'startup': 'js/startup.js',
        'router': 'js/router.js',
        'dataProvider': 'js/dataProvider.js',
        'apiService': 'js/apiService.js',
        'homeController': 'js/controllers/homeController.js',
        'userController': 'js/controllers/userController.js',
        'categoriesController': 'js/controllers/categoriesController.js',
        'questionController': 'js/controllers/questionController.js',
        'submitquestionController': 'js/controllers/submitquestionController.js',
        'myquestionsController': 'js/controllers/myquestionsController.js',
        'feedbackController': 'js/controllers/feedbackController.js',
    }
});

System.import('startup');
