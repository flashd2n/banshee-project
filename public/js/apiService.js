'use strict'

class ApiService {

    request(url, type) {

        let promise = new Promise(function (resolve, reject) {
            $.ajax({
                url,
                type,
                success: resolve,
                error: reject
            });
        });

        return promise;

    }

    get(url) {

        return this.request(url, 'GET');

    }

}

export default new ApiService();
