'use strict';

import dataprovider from 'dataProvider';

class CategoriesController {

    load(parameters) {

        const $APP_CONTAINER = $('#app-container');

        const DATA_URL = `https://bansheeproject-7bb5a.firebaseio.com/${parameters.category}-questions.json`;

        Promise.all([dataprovider.getQuestions(DATA_URL), dataprovider.getTemplate(`${parameters.category}Category`)])
            .then(function ([data, renderer]) {

                console.log(data);

                let template = renderer(data);

                $APP_CONTAINER.html(template);

            }).catch(function () {
                console.log('Error: category controller promise catch');
            });


    }
}

export default new CategoriesController();
