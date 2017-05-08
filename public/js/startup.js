'use strict';

import router from 'router';
import homeController from 'homeController';
import userController from 'userController';
import categoriesController from 'categoriesController';
import questionController from 'questionController';
import submitquestionController from 'submitquestionController';
import myquestionsController from 'myquestionsController';
import feedbackController from 'feedbackController';


// build routes

Handlebars.registerHelper('answersCount', function (question) {

    if (question.hasOwnProperty('answers')) {

        let keyCount = Object.keys(question.answers).length;
        return keyCount + '';

    } else {

        return '0';

    }

});

Handlebars.registerHelper('likesCount', function (question) {

    if (question.hasOwnProperty('likes')) {

        let keyCount = Object.keys(question.likes).length;
        return keyCount + '';

    } else {

        return '0';

    }

});

Handlebars.registerHelper('dislikesCount', function (question) {

    if (question.hasOwnProperty('dislikes')) {

        let keyCount = Object.keys(question.dislikes).length;
        return keyCount + '';

    } else {

        return '0';

    }

});

Handlebars.registerHelper('ifUser', function (options) {

    let user = firebase.auth().currentUser;

    if (user) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('questionId', function () {

    let id = location.hash.split('/')[3] + '';
    return id;

});




router.on('', homeController.load)
    .on('/home', homeController.load)
    .on('/home/categories/:category', categoriesController.load)
    .on('/home/question/:id', questionController.load)
    .on('/home/signin', userController.signin)
    .on('/home/register', userController.register)
    .on('/processRegistration', userController.processRegistration)
    .on('/processSignin', userController.processSignin)
    .on('/home/submitquestion', submitquestionController.load)
    .on('/home/myquestions', myquestionsController.load)
    .on('/processSubmitQuestion', submitquestionController.processSubmitQuestion)
    .on('/processSubmitAnswer/:category/:id', questionController.processSubmitAnswer)
    .on('/processQuestionLike/:category/:id', feedbackController.processQuestionLike)
    .on('/processQuestionDislike/:category/:id', feedbackController.processQuestionDislike)
    .on('/processAnswerLike/:category/:questionid/:answerid', feedbackController.processAnswerLike)
    .on('/processAnswerDislike/:category/:questionid/:answerid', feedbackController.processAnswerDislike)
    .on('/home/logout', userController.logout);



// navigate

$(document).ready(function () {
    location.hash = '#/home';
});

$(window).on('hashchange', router.navigate.bind(router));


// receive all data

//$.ajax({
//    url: 'https://bansheeproject-7bb5a.firebaseio.com/.json',
//    type: 'GET',
//    success: function (result) {
//        console.log(result);
//    },
//    error: function (error) {
//        console.log(error);
//    }
//});


// push success + thenable set

//firebase.database().ref('javascript-questions')
//    .push({
//        title: 'some title JS 3',
//        body: 'some body',
//        category: 'c#',
//        author: 'flash',
//        date: '1-5-2017',
//        dislikes: 2,
//        likes: 1,
//        answers: {}
//    }).then(function () {
//        console.log('sent');
//    });
