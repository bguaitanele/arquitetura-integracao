Highcharts.chart('container', {

    title: {
        text: 'Diagrama de integração'
    },

    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. From {point.from} to {point.to}: {point.weight}.'
        }
    },

    series: [{
        keys: ['from', 'to', 'weight'],
        data: [
            ['ABA', 'AUT', 1],
            ['ABA', 'BLK', 1],
            ['ABA', 'NPC', 1],
            ['ABA', 'NPC', 1],

        ],
        type: 'dependencywheel',
        name: 'Integração',
        dataLabels: {
            color: '#333',
            textPath: {
                enabled: true,
                attributes: {
                    dy: 5
                }
            },
            distance: 10
        },
        size: '95%'
    }]

});
