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



//                if (questionToDisplay.hasOwnProperty('answers')) {
    //                    console.log(Object.keys(questionToDisplay.answers).length);
    //                } else {
    //                    console.log(0);
    //                }


                let questionCategory = questionToDisplay.category;

                let template = renderer(questionToDisplay);

                $APP_CONTAINER.html(template);

                $('#answer-submit').attr('href', `#/processSubmitAnswer/${questionCategory}/${questionId}`);

                let $answerField = $('#answer-field').hide();
                let $answerButton = $('#leave-answer');

                // check for user login

                let user = firebase.auth().currentUser;

                if (user) {

                    $answerButton.remove('hidden');

                    $answerButton.on('click', function () {


                        $answerField.slideToggle();

                    });


                } else {
                    $answerButton.addClass('hidden');
                }


            }).catch(function () {
                console.log('Error: question controller promise catch');
            });

    }

    processSubmitAnswer(parameters) {
        // call works

        // get all data

        let questionId = parameters.id;
        let questionCategory = parameters.category;

        let options = QuestionController.ConstructAnswerData();

        let category = `${questionCategory}-questions/${questionId}/answers`;

        // send put request 


        dataprovider.sendAnswer(category, options).then(function () {

            console.log('success answer');

            location.hash = '#/home';

        }).catch(function () {
            console.log('answer error');
        });

        // redirect to home
    }

    static ConstructAnswerData() {

        let body = $('#answer-body').val();
        let date = QuestionController.BuildDate();
        let author = firebase.auth().currentUser.displayName;
        let dislikes = 0;
        let likes = 0;

        let options = {
            body: body,
            date: date,
            author: author,
            dislikes: dislikes,
            likes: likes
        };

        return options;


    }

    static BuildDate() {
        let date = new Date();

        let dateAsString = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        return dateAsString;
    }
}

export default new QuestionController();
