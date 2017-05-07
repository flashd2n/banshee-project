'use strict';

import dataprovider from 'dataProvider';

class HomeController {

    load() {

        const $APP_CONTAINER = $('#app-container');

        const ALL_QUESTIONS_URL = 'https://bansheeproject-7bb5a.firebaseio.com/.json';

        HomeController.UpdateUI();

        Promise.all([dataprovider.getQuestions(ALL_QUESTIONS_URL), dataprovider.getTemplate('home')])
            .then(function ([data, renderer]) {

                console.log(data);

                let cSharpArray = data['c-sharp-questions'];
                let jsArray = data['javascript-questions'];

                let allQuestions = cSharpArray.concat(jsArray);

                let template = renderer(allQuestions);

                $APP_CONTAINER.html(template);

            }).catch(function () {
                console.log('Error: homecontroller promise catch');
            });

    }

    static UpdateUI() {

        let user = firebase.auth().currentUser;

        if (user) {

            $('#nav-my-questions').removeClass('hidden');
            $('#nav-submit-question').removeClass('hidden');
            $('#nav-logout').removeClass('hidden');

            $('#nav-signin').addClass('hidden');
            $('#nav-register').addClass('hidden');

        } else {
            $('#nav-my-questions').addClass('hidden');
            $('#nav-submit-question').addClass('hidden');
            $('#nav-logout').addClass('hidden');

            $('#nav-signin').removeClass('hidden');
            $('#nav-register').removeClass('hidden');
        }

    }
}

export default new HomeController();
