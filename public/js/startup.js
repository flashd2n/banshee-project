'use strict';

import router from 'router';
import homeController from 'homeController';
import userController from 'userController';
import categoriesController from 'categoriesController';
import questionController from 'questionController';
import submitquestionController from 'submitquestionController';
import myquestionsController from 'myquestionsController';
import feedbackController from 'feedbackController';
import handlebarsHelpers from 'handlebarsHelpers';

handlebarsHelpers.buildHelpers();

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


$(document).ready(router.navigate.bind(router));

$(window).on('hashchange', router.navigate.bind(router));
