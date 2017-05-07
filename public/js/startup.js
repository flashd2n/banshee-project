'use strict';

import router from 'router';

// build routes

let $container = $('#app-container');

router.on('', () => $container.html('HOME'))
    .on('/home', () => $container.html('HOME'))
    .on('/home/categories/:category', (params) => $container.html(`CATEGORY ${params.category}`))
    .on('/home/question/:id', (params) => $container.html(`QUESTION ${params.id}`))
    .on('/home/signin', () => $container.html('SIGN IN'))
    .on('/home/register', () => $container.html('REGISTER'))
    .on('/home/logout', () => $container.html('LOGOUT'));


// navigate

$(document).ready(function () {
    location.hash = '#/home';
});

$(window).on('hashchange', router.navigate.bind(router));
