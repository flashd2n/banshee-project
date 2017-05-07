'use strict';

import dataprovider from 'dataProvider';

class HomeController {

    load() {

        const $APP_CONTAINER = $('#app-container');

        const ALL_QUESTIONS_URL = 'https://bansheeproject-7bb5a.firebaseio.com/.json';

        $APP_CONTAINER.html('HOME');

        // get data

        dataprovider.getQuestions(ALL_QUESTIONS_URL).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.log(error);
        });

        // get template


    }
}

export default new HomeController();
