'use strict';

import mySorter from '../js/utils/sorter.js';

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

    it('Expect most likes method to return a sorted array, when only one of the object has likes', function () {

        let result = mySorter.mostLiked(data);

        expect(result).to.be.instanceof(Array);
        expect(result).to.have.length(2);
        expect(result[0]).to.have.property('likes');

    });

    it('Expect most likes method to return a sorted array, when the objects have different number of likes', function () {

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

});


mocha.run();
