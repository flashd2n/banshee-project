'use strict';

import router from 'router';


console.log(router);
console.log(firebase);

let playersReference = firebase.database().ref('players');


playersReference.set({
    John: {
        number: 1,
        age: 30
    },
    Amanda: {
        number: 2,
        age: 20
    }
});
