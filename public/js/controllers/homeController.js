'use strict';


class HomeController {

    load() {

        let $appContainer = $('#app-container');

        $appContainer.html('HOME');

    }
}

export default new HomeController();
