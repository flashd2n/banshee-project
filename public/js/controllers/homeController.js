'use strict';

import dataprovider from 'dataProvider';
import sorter from 'sorter';

class HomeController {

    load() {

        const $APP_CONTAINER = $('#app-container');

        const ALL_QUESTIONS_URL = 'https://bansheeproject-7bb5a.firebaseio.com/.json';

        HomeController.UpdateUI();

        Promise.all([dataprovider.getQuestions(ALL_QUESTIONS_URL), dataprovider.getTemplate('home'), dataprovider.getTemplate('sorting')])
            .then(function ([data, renderer, rendererSorting]) {

                let allQuestions = Object.assign(data['c-sharp-questions'], data['javascript-questions']);

                let allData = sorter.newest(allQuestions);

                let template = renderer(allData);

                $APP_CONTAINER.html(template);

                $('ul li').removeClass('active');

                $(`#nav-home`).addClass('active');

                $('#most-liked').on('click', () => {
                    allData = sorter.mostLiked(allQuestions);
                    template = rendererSorting(allData);
                    $('#questions').html(template);
                });

                $('#most-disliked').on('click', () => {
                    allData = sorter.mostDisliked(allQuestions);
                    template = rendererSorting(allData);
                    $('#questions').html(template);
                });

                $('#newest').on('click', () => {
                    allData = sorter.newest(allQuestions);
                    template = rendererSorting(allData);
                    $('#questions').html(template);
                });

                $('#oldest').on('click', () => {
                    allData = sorter.oldest(allQuestions);
                    template = rendererSorting(allData);
                    $('#questions').html(template);
                });

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
