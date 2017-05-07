'use strict';

import dataprovider from 'dataProvider';

class CategoriesController {

    load(parameters) {

        let $appContainer = $('#app-container');

        let dataUrl = `https://bansheeproject-7bb5a.firebaseio.com/${parameters.category}-questions.json`;

        $appContainer.html(`CATEGORY ${parameters.category}`);

        // get data

        dataprovider.getQuestions(dataUrl).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.log(error);
        });

        // get template


    }
}

export default new CategoriesController();
