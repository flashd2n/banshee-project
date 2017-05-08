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

        dataprovider.sendFeedback(path, data).then(function () {
            console.log('question like sent');
            location.hash = '#/home';
        }).catch(function () {
            console.log('question like fail');
        });
    }

    processQuestionDislike(parameters) {
        let user = firebase.auth().currentUser.email;
        let category = parameters.category;
        let id = parameters.id;

        let path = `${category}-questions/${id}/dislikes`;
        let data = {
            user: user
        };

        dataprovider.sendFeedback(path, data).then(function () {
            console.log('question dislike sent');
            location.hash = '#/home';
        }).catch(function () {
            console.log('question dislike fail');
        });
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

        dataprovider.sendFeedback(path, data).then(function () {
            console.log('answer like sent');
            location.hash = '#/home';
        }).catch(function () {
            console.log('question dislike fail');
        });

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

        dataprovider.sendFeedback(path, data).then(function () {
            console.log('answer dislike sent');
            location.hash = '#/home';
        }).catch(function () {
            console.log('question dislike fail');
        });

    }

}

export default new FeedbackController();
