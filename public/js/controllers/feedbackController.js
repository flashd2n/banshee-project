'use strict';

import dataprovider from 'dataProvider';

class FeedbackController {

    processQuestionLike(parameters) {
        let category = parameters.category;
        let id = parameters.id;

        console.log('q like');
        console.log(category);
        console.log(id);

    }

    processQuestionDislike(parameters) {
        let category = parameters.category;
        let id = parameters.id;

        console.log('q dislike');
        console.log(category);
        console.log(id);
    }

    processAnswerLike(parameters) {
        let category = parameters.category;
        let questionid = parameters.questionid;
        let answerid = parameters.answerid;

        console.log('a like');
        console.log(category);
        console.log(questionid);
        console.log(answerid);

    }

    processAnswerDislike(parameters) {
        let category = parameters.category;
        let questionid = parameters.questionid;
        let answerid = parameters.answerid;

        console.log('a dislike');
        console.log(category);
        console.log(questionid);
        console.log(answerid);
    }

}

export default new FeedbackController();
