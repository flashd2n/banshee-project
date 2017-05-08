'use strict';

class Sorter {

    mostLiked(allData) {

        let dataArray = [];

        for (let data in allData) {

            allData[data]['id'] = data;
            dataArray.push(allData[data]);
        }

        return dataArray.sort(function (x, y) {

            if (x.hasOwnProperty('likes') && y.hasOwnProperty('likes')) {
                return Object.keys(y.likes).length - Object.keys(x.likes).length;
            } else if (!x.hasOwnProperty('likes') && y.hasOwnProperty('likes')) {
                return 1;
            } else if (x.hasOwnProperty('likes') && !y.hasOwnProperty('likes')) {
                return -1;
            } else {
                return 0;
            }

        });

    }

    mostDisliked(allData) {

        let dataArray = [];

        for (let data in allData) {

            allData[data]['id'] = data;
            dataArray.push(allData[data]);
        }

        return dataArray.sort(function (x, y) {

            if (x.hasOwnProperty('likes') && y.hasOwnProperty('likes')) {
                return Object.keys(x.likes).length - Object.keys(y.likes).length;
            } else if (!x.hasOwnProperty('likes') && y.hasOwnProperty('likes')) {
                return -1;
            } else if (x.hasOwnProperty('likes') && !y.hasOwnProperty('likes')) {
                return 1;
            } else {
                return 0;
            }


        });
    }

    newest(allData) {

        let dataArray = [];

        for (let data in allData) {

            allData[data]['id'] = data;
            dataArray.push(allData[data]);
        }

        return dataArray.sort((x, y) => new Date(y.dateDetails).getTime() - new Date(x.dateDetails).getTime());

    }

    oldest(allData) {

        let dataArray = [];

        for (let data in allData) {

            allData[data]['id'] = data;
            dataArray.push(allData[data]);
        }

        return dataArray.sort((x, y) => new Date(x.dateDetails).getTime() - new Date(y.dateDetails).getTime());

    }

}
export default new Sorter();
