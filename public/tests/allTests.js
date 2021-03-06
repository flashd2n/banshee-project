'use strict';

import mySorter from '../js/utils/sorter.js';
import handlebarsHelpers from '../js/utils/handlebarsHelpers.js';
import router from '../js/router.js';
import apiService from '../js/apiService.js';


mocha.setup('bdd');
const expect = chai.expect;

describe('Sorter Tests', function () {

    const data = {
        "-KjeJM53MBoY3_9giYcy": {
            "author": "flash",
            "body": "Bodyyyy",
            "category": "c-sharp",
            "date": "9-5-2017",
            "dateDetails": "Fri Jun 09 2017 02:07:37 GMT+0300 (FLE Daylight Time)",
            "email": "thunder_gfw@abv.bg",
            "likes": {
                "-KjeL5_S67zL9xPuMquK": {
                    "user": "thunder_gfw@abv.bg"
                },
                "-KjeLExTvBc2EfLzwqz-": {
                    "user": "k.kostov.eu@gmail.com"
                }
            },
            "title": "New Date Two"
        },
        "-KjeJQtKrQLJpw-4ZeZ1": {
            "author": "flash",
            "body": "asjkdlhsada",
            "category": "c-sharp",
            "date": "9-5-2017",
            "dateDetails": "Fri Jun 09 2017 02:07:58 GMT+0300 (FLE Daylight Time)",
            "dislikes": {
                "-KjeL6QxH04g92pBHTJl": {
                    "user": "thunder_gfw@abv.bg"
                },
                "-KjeLGLQ30snHX2gZqPI": {
                    "user": "k.kostov.eu@gmail.com"
                }
            },
            "email": "thunder_gfw@abv.bg",
            "title": "new Date Three"
        }
    };

    it('Expect most likes method to receive an object, but return an array', function () {

        let result = mySorter.mostLiked(data);

        expect(result).to.be.instanceof(Array);

    });

    it('Expect most likes method to return a correctly sorted array, when only one of the object has likes', function () {

        let result = mySorter.mostLiked(data);

        expect(result).to.be.instanceof(Array);
        expect(result).to.have.length(2);
        expect(result[0]).to.have.property('likes');

    });

    it('Expect most likes method to return a correctly sorted array, when the objects have different number of likes', function () {

        data["-KjeJQtKrQLJpw-4ZeZ1"]['likes'] = {
            "-KjeLGLQ30snHX2gZqPI": {
                "user": "k.kostov.eu@gmail.com"
            }
        };


        let result = mySorter.mostLiked(data);

        let resultOneLikes = Object.keys(result[0].likes).length;

        expect(result).to.be.instanceof(Array);
        expect(result).to.have.length(2);
        expect(resultOneLikes).to.equal(2);
    });

    it('Expect most disliked method to receive an object, but return an array', function () {

        let result = mySorter.mostDisliked(data);

        expect(result).to.be.instanceof(Array);

    });

    it('Expect most disliked method to return a correctly sorted array, when only one of the object has dislikes', function () {

        let result = mySorter.mostDisliked(data);

        expect(result).to.be.instanceof(Array);
        expect(result).to.have.length(2);
        expect(result[0]).to.have.property('dislikes');

    });

    it('Expect most disliked method to return a correctly sorted array, when the objects have different number of dislikes', function () {

        data["-KjeJM53MBoY3_9giYcy"]['dislikes'] = {
            "-KjeLGLQ30snHX2gZqPI": {
                "user": "k.kostov.eu@gmail.com"
            }
        };


        let result = mySorter.mostDisliked(data);

        let resultOneLikes = Object.keys(result[0].dislikes).length;

        expect(result).to.be.instanceof(Array);
        expect(result).to.have.length(2);
        expect(resultOneLikes).to.equal(2);
    });

    it('Expect newest method to receive an object, but return an array', function () {

        let result = mySorter.newest(data);

        expect(result).to.be.instanceof(Array);

    });

    it('Expect newest method to return an correctly sorted array', function () {

        let result = mySorter.newest(data);

        expect(result[0].title).to.eql('new Date Three');

    });

    it('Expect oldest method to receive an object, but return an array', function () {

        let result = mySorter.oldest(data);

        expect(result).to.be.instanceof(Array);

    });

    it('Expect oldest method to return an correctly sorted array', function () {

        let result = mySorter.oldest(data);

        expect(result[0].title).to.eql('New Date Two');

    });

});

describe('Handlebars Helpers Tests', function () {

    it('Expect build helpers method to create answersCount helper', function () {

        handlebarsHelpers.buildHelpers();

        let helper = Handlebars.helpers.answersCount;

        expect(helper).to.exist;

    });

    it('Expect build helpers method to create likesCount helper', function () {

        handlebarsHelpers.buildHelpers();

        let helper = Handlebars.helpers.likesCount;

        expect(helper).to.exist;

    });

    it('Expect build helpers method to create dislikesCount helper', function () {

        handlebarsHelpers.buildHelpers();

        let helper = Handlebars.helpers.dislikesCount;

        expect(helper).to.exist;

    });

    it('Expect build helpers method to create ifUser helper', function () {

        handlebarsHelpers.buildHelpers();

        let helper = Handlebars.helpers.ifUser;

        expect(helper).to.exist;

    });

    it('Expect build helpers method to create questionId helper', function () {

        handlebarsHelpers.buildHelpers();

        let helper = Handlebars.helpers.answersCount;

        expect(helper).to.exist;

    });

});

describe('Router Tests', function () {


    it('Expect new instance of router to have an empty routes array', function () {

        expect(router).to.have.property('_routes');
        expect(router._routes).to.have.length(0);

    });

    it('Expect on method to successfully push new route when valid data is passed', function () {

        let url = '/homee';
        let callback = function () {
            return 5;
        };

        router.on(url, callback);

        expect(router._routes).to.have.length(1);


    });

    it('Expect on method to correctly pass the parameters in the routes array when valid data is passed', function () {

        let url = '/homee';
        let callback = function () {
            return 5;
        };

        router.on(url, callback);

        expect(router._routes[0].patternUrl).to.eql(url);
        expect(router._routes[0].callback.name).to.equal('callback');

    });


    it('Expect matchurls to return false when the lengths of the urls do not match', function () {


        let urlOne = '/home/category';
        let urlTwo = '/home';

        let result = router.matchUrls(urlOne, urlTwo);

        expect(result).to.be.false;

    });

    it('Expect matchurls to return false when url constant segments do not match', function () {

        let urlOne = '/category';
        let urlTwo = '/home';

        let result = router.matchUrls(urlOne, urlTwo);

        expect(result).to.be.false;

    });

    it('Expect matchurls to return an object when a match is found', function () {


        let urlOne = '/home/horror';
        let urlTwo = '/home/:category';

        let result = router.matchUrls(urlOne, urlTwo);

        expect(result).to.be.an('object');


    });

    it('Expect matchurls to return an object with correct parameters when a match is found', function () {

        let urlOne = '/home/horror';
        let urlTwo = '/home/:category';

        let result = router.matchUrls(urlOne, urlTwo);

        expect(result).to.have.property('category');

    });


});

describe('API Service Tests', function () {

    it('Expect Api service request to return a promise', function (done) {

        let result = apiService.request('url/some', 'GET').then(() => console.log('x')).catch(() => console.log('y'));

        expect(result.constructor.name).to.equal('Promise');
        done();


    });

});



mocha.run();
