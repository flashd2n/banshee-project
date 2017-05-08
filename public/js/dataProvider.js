'use strict';

import apiService from 'apiService';

class DataProvider {

    constructor() {
        this._cachedTempaltes = {};
    }

    getQuestions(url) {

        return apiService.get(url);
    }

    getTemplate(templateName) {

        return apiService.get(`templates/${templateName}.handlebars`)
            .then(function (template) {

                let renderer = Handlebars.compile(template);

                return Promise.resolve(renderer);

            }).catch(function () {
                console.log('Error: loading template');
            });
    }

    signinUser(email, password) {

        return apiService.signin(email, password);

    }

    registerUser(username, email, password) {

        return apiService.register(email, password).then(function (user) {

            return user.updateProfile({
                displayName: username
            });

        }).catch(function (error) {
            console.log(error);
        });

    }

    logoutUser() {

        return apiService.logout();

    }

    sendQuestion(category, data) {
        let reference = firebase.database().ref(category);
        return apiService.pushData(reference, data);
    }

    sendAnswer(category, data) {
        let reference = firebase.database().ref(category);
        return apiService.pushData(reference, data);
    }

}


export default new DataProvider();
