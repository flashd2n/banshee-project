'use strict';

import apiService from 'apiService';

class DataProvider {

    getQuestions(url) {

        const allData = 'https://bansheeproject-7bb5a.firebaseio.com/.json';

        return apiService.get(url);
    }

}


export default new DataProvider();
