'use strict';


class CategoriesController {

    load(parameters) {

        let $appContainer = $('#app-container');

        $appContainer.html(`CATEGORY ${parameters.category}`);

    }
}

export default new CategoriesController();
