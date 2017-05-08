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

    signin(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    register(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    logout() {
        return firebase.auth().signOut();
    }

    pushData(reference, data) {
        return reference.push(data);
    }

    feedbackStatus(user, path) {

        let promise = new Promise(function (resolve, reject) {

            let reference = firebase.database().ref(path);

            reference.once('value', function (snapshot) {

                let allLikes = snapshot.val();

                if (allLikes) {

                    for (let id in allLikes) {

                        if (allLikes[id].user === user) {

                            reject();

                        }
                    }


                } else {
                    console.log('here');

                    resolve();
                }

                resolve();

            });
        });

        return promise;
    }

}

export default new ApiService();
