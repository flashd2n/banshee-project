'use strict';

import dataprovider from 'dataProvider';

class HomeController {

    load() {

        const $APP_CONTAINER = $('#app-container');

        const ALL_QUESTIONS_URL = 'https://bansheeproject-7bb5a.firebaseio.com/.json';

        Promise.all([dataprovider.getQuestions(ALL_QUESTIONS_URL), dataprovider.getTemplate('home')])
            .then(function ([data, renderer]) {

                let cSharpArray = data['c-sharp-questions'];
                let jsArray = data['javascript-questions'];

                let allQuestions = cSharpArray.concat(jsArray);

                let template = renderer(allQuestions);

                $APP_CONTAINER.html(template);

            }).catch(function () {
                console.log('Error: homecontroller promise catch');
            });

    }
}

export default new HomeController();
