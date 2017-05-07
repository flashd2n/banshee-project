'use strict';


class UserController {

    signin() {

        let $appContainer = $('#app-container');

        $appContainer.html('SIGN IN');

    }

    register() {

        let $appContainer = $('#app-container');

        $appContainer.html('REGISTER');

    }

    logout() {

        let $appContainer = $('#app-container');

        $appContainer.html('LOGOUT');

    }
}

export default new UserController();
