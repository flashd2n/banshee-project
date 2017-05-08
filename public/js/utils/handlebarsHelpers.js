'use strict';

class HandlebarsHelpers {

    buildHelpers() {

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
    }
}

export default new HandlebarsHelpers();
