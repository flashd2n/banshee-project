'use strict';

import dataprovider from 'dataProvider';

class UserController {

    signin() {

        const $APP_CONTAINER = $('#app-container');

        dataprovider.getTemplate('signin').then(function (renderer) {

            let template = renderer();

            $APP_CONTAINER.html(template);

        });



    }

    processSignin() {

        let localStorageIdKey = 'userID';
        let localStorageUsernameKey = 'username';
        let userEmail = $('#input-email-signin').val();
        let userPassword = $('#input-password-signin').val();

        dataprovider.signinUser(userEmail, userPassword).then(function () {

            let user = firebase.auth().currentUser;

            window.localStorage.setItem(localStorageIdKey, user.uid);
            window.localStorage.setItem(localStorageUsernameKey, user.displayName);

            location.hash = '#/home';

        }).catch(function (error) {
            console.log(error);
        });

    }

    register() {

        const $APP_CONTAINER = $('#app-container');

        dataprovider.getTemplate('register').then(function (renderer) {

            let template = renderer();

            $APP_CONTAINER.html(template);


        });

    }

    processRegistration() {

        // the values from the input fields
        let localStorageIdKey = 'userID';
        let localStorageUsernameKey = 'username';
        let userEmail = $('#input-email').val();
        let userPassword = $('#input-password').val();
        let userName = $('#input-username').val();

        dataprovider.registerUser(userName, userEmail, userPassword).then(function () {

            let user = firebase.auth().currentUser;
            let userID = user.uid;
            // successfully registered user and set username

            // write to local storage

            window.localStorage.setItem(localStorageIdKey, userID);
            window.localStorage.setItem(localStorageUsernameKey, userName);

            // redirect to home 'logged'

            location.hash = '#/home';


            console.log(user);

        }).catch(function (error) {
            console.log(error);
        });
        // process registration

        // update profile to add username

    }

    logout() {

        const $APP_CONTAINER = $('#app-container');

        $APP_CONTAINER.html('LOGOUT');

        dataprovider.logoutUser().then(function () {

            location.hash = '#/home';

        }).catch(function (error) {
            console.log(error);
        });

    }


}

export default new UserController();
