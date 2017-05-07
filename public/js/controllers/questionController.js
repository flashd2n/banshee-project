'use strict';


class QuestionController {

    load(parameters) {

        let $appContainer = $('#app-container');

        $appContainer.html(`QUESTION ${parameters.id}`);

    }
}

export default new QuestionController();
