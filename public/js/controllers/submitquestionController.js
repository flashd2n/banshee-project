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

        let options = SubmitQuestionController.ConstructQuestionData();

        let category = `${options.category}-questions`;

        dataprovider.sendQuestion(category, options).then(function () {

            location.hash = '#/home';

        }).catch(function (error) {
            console.log(error);
        });

    }

    static ConstructQuestionData() {

        let title = $('#question-title').val();
        let body = $('#question-body').val();

        let questionCategory = '';

        if ($('#javascript-radio').is(':checked')) {
            questionCategory = 'javascript';
        } else {
            questionCategory = 'c-sharp';
        }

        let author = firebase.auth().currentUser.displayName;
        let date = SubmitQuestionController.BuildDate();
        let userEmail = firebase.auth().currentUser.email;


        let options = {
            title: title,
            body: body,
            category: questionCategory,
            author: author,
            date: date.date,
            email: userEmail,
            dateDetails: date.dateDetails
        };

        return options;

    }

    static BuildDate() {

        let date = new Date();

        let dateAsString = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        let dateDetails = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());

        let dateDetailsString = dateDetails.toString();

        let result = {
            date: dateAsString,
            dateDetails: dateDetailsString
        };

        return result;
    }

}

export default new SubmitQuestionController();
