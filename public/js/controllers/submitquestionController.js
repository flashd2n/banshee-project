'use strict';

import dataprovider from 'dataProvider';

class SubmitQuestionController {

    load() {

        const $APP_CONTAINER = $('#app-container');

        dataprovider.getTemplate('submitquestion').then(function (renderer) {

            let template = renderer();

            $APP_CONTAINER.html(template);

        });

    }

    processSubmitQuestion() {

        // get data from fields

//        let questionCategory = '';
//
//        if ($('#javascript-radio').is(':checked')) {
//            questionCategory = 'javascript';
//        } else {
//            questionCategory = 'c#';
//        }
//
//        let questionData = {
//            answers: [],
//            author: firebase.auth().currentUser.displayName,
//            body: $('#question-body').val(),
//            category: questionCategory,
//            date,
//            dislikes: 0,
//            likes: 0,
//            title: $('#question-title').val()
//        };




        // send data to server


    }

}

export default new SubmitQuestionController();
