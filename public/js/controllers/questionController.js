'use strict';

import dataprovider from 'dataProvider';

class QuestionController {

    load(parameters) {

        let $APP_CONTAINER = $('#app-container');

        let questionId = parameters.id;


        // get all questions

        const ALL_QUESTIONS_URL = 'https://bansheeproject-7bb5a.firebaseio.com/.json';

        Promise.all([dataprovider.getQuestions(ALL_QUESTIONS_URL), dataprovider.getTemplate('question')])
            .then(function ([data, renderer]) {

                let allQuestions = Object.assign(data['c-sharp-questions'], data['javascript-questions']);

                let questionToDisplay = allQuestions[questionId];

                let template = renderer(questionToDisplay);

                $APP_CONTAINER.html(template);

            }).catch(function () {
                console.log('Error: question controller promise catch');
            });

    }
}

export default new QuestionController();
