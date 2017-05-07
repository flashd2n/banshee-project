'use strict';

import router from 'router';
import homeController from 'homeController';
import userController from 'userController';
import categoriesController from 'categoriesController';
import questionController from 'questionController';

// build routes

router.on('', homeController.load)
    .on('/home', homeController.load)
    .on('/home/categories/:category', categoriesController.load)
    .on('/home/question/:id', questionController.load)
    .on('/home/signin', userController.signin)
    .on('/home/register', userController.register)
    .on('/home/logout', userController.logout);


// navigate

$(document).ready(function () {
    location.hash = '#/home';
});

$(window).on('hashchange', router.navigate.bind(router));


//let entireDatabase = firebase.database().ref('javascript-questions');
//
//entireDatabase.on('value', function (snapshot) {
//
//    let data = snapshot.val();
//
//}, function (error) {
//    console.log('some error');
//});

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
