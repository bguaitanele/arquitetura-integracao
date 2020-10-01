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
            ['ABX','BLK', 1],
            ['ABX','DETRAN', 1],
            ['ABX','MAS', 1],
            ['ABX','NPC', 1],
            ['ABX','SEFAZ', 1],
            ['ABX','SMD', 1],
            ['ACO','AOX', 1],
            ['ACO','APS', 1],
            ['ACO','BLK', 1],
            ['ACO','MBK (EJB)', 1],
            ['ACO','SGA', 1],
            ['ACO','SMD', 1],

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
