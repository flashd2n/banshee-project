'use strict';

import dataprovider from 'dataProvider';

class MyQuestionsController {

    load(parameters) {

        let $APP_CONTAINER = $('#app-container');

        let questionId = parameters.id;

        // get all questions

        const ALL_QUESTIONS_URL = 'https://bansheeproject-7bb5a.firebaseio.com/.json';

        Promise.all([dataprovider.getQuestions(ALL_QUESTIONS_URL), dataprovider.getTemplate('myquestions')])
            .then(function ([data, renderer]) {

                let allQuestions = Object.assign(data['c-sharp-questions'], data['javascript-questions']);

                let questionsToDisplay = MyQuestionsController.GetMyQuestions(allQuestions);

                let template = renderer(questionsToDisplay);

                $APP_CONTAINER.html(template);

                $('ul li').removeClass('active');

                $(`#nav-my-questions`).addClass('active');

            }).catch(function () {
                console.log('Error: myquestions controller promise catch');
            });

    }

    static GetMyQuestions(allQuestions) {

        let userEmail = firebase.auth().currentUser.email;

        // have all questions and user email

        let questionsToDisplay = {};

        for (let questionID in allQuestions) {

            let questionEmail = allQuestions[questionID].email;

            if (questionEmail === userEmail) {

                questionsToDisplay[questionID] = allQuestions[questionID];

            }

        }

        return questionsToDisplay;

    }

}

export default new MyQuestionsController();
