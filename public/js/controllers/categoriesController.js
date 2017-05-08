'use strict';

import dataprovider from 'dataProvider';
import sorter from 'sorter';

class CategoriesController {

    load(parameters) {

        const $APP_CONTAINER = $('#app-container');

        const DATA_URL = `https://bansheeproject-7bb5a.firebaseio.com/${parameters.category}-questions.json`;

        Promise.all([dataprovider.getQuestions(DATA_URL), dataprovider.getTemplate(`${parameters.category}Category`), dataprovider.getTemplate('sorting')])
            .then(function ([data, renderer, rendererSorting]) {

                let allData = sorter.newest(data);

                let template = renderer(allData);

                $APP_CONTAINER.html(template);

                $('#most-liked').on('click', () => {
                    allData = sorter.mostLiked(data);
                    template = rendererSorting(allData);
                    $('#questions').html(template);
                });

                $('#most-disliked').on('click', () => {
                    allData = sorter.mostDisliked(data);
                    template = rendererSorting(allData);
                    $('#questions').html(template);
                });

                $('#newest').on('click', () => {
                    allData = sorter.newest(data);
                    template = rendererSorting(allData);
                    $('#questions').html(template);
                });

                $('#oldest').on('click', () => {
                    allData = sorter.oldest(data);
                    template = rendererSorting(allData);
                    $('#questions').html(template);
                });

            }).catch(function () {
                console.log('Error: category controller promise catch');
            });


    }
}

export default new CategoriesController();
