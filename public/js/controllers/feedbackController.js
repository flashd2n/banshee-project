'use strict';

import dataprovider from 'dataProvider';

class FeedbackController {

    processQuestionLike(parameters) {

        let user = firebase.auth().currentUser.email;
        let category = parameters.category;
        let id = parameters.id;

        let path = `${category}-questions/${id}/likes`;
        let data = {
            user: user
        };

        FeedbackController.SendDataToProvider(user, path, data);

    }

    processQuestionDislike(parameters) {
        let user = firebase.auth().currentUser.email;
        let category = parameters.category;
        let id = parameters.id;

        let path = `${category}-questions/${id}/dislikes`;
        let data = {
            user: user
        };

        FeedbackController.SendDataToProvider(user, path, data);
    }

    processAnswerLike(parameters) {
        let user = firebase.auth().currentUser.email;
        let category = parameters.category;
        let questionid = parameters.questionid;
        let answerid = parameters.answerid;

        let path = `${category}-questions/${questionid}/answers/${answerid}/likes`;
        let data = {
            user: user
        };

        FeedbackController.SendDataToProvider(user, path, data);

    }

    processAnswerDislike(parameters) {
        let user = firebase.auth().currentUser.email;
        let category = parameters.category;
        let questionid = parameters.questionid;
        let answerid = parameters.answerid;

        let path = `${category}-questions/${questionid}/answers/${answerid}/dislikes`;
        let data = {
            user: user
        };

        FeedbackController.SendDataToProvider(user, path, data);

    }

    static SendDataToProvider(user, path, data) {


        dataprovider.checkFeedbackStatus(user, path).then(function () {

            dataprovider.sendFeedback(path, data).then(function () {
                console.log('feedback sent');
                window.history.back();
            }).catch(function () {
                window.history.back();
                console.log('feedback fail');
            });

        }).catch(function () {
            window.history.back();
            console.log('feedback exists');
        });

    }

}

export default new FeedbackController();
