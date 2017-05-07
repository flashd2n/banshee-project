'use strict';

import dataprovider from 'dataProvider';

class QuestionController {

    load(parameters) {

        let $APP_CONTAINER = $('#app-container');

        let questionId = Number(parameters.id);

        // get all questions

        const ALL_QUESTIONS_URL = 'https://bansheeproject-7bb5a.firebaseio.com/.json';

        Promise.all([dataprovider.getQuestions(ALL_QUESTIONS_URL), dataprovider.getTemplate('question')])
            .then(function ([data, renderer]) {

                let cSharpArray = data['c-sharp-questions'];
                let jsArray = data['javascript-questions'];

                let allQuestions = cSharpArray.concat(jsArray);

                console.log(allQuestions);

                let questionToDisplay = allQuestions.find(x => x.id === questionId);

                console.log(questionToDisplay);

                let template = renderer(questionToDisplay);

                $APP_CONTAINER.html(template);

            }).catch(function () {
                console.log('Error: homecontroller promise catch');
            });

    }
}

export default new QuestionController();
