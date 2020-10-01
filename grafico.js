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
            ['Brazil', 'Portugal', 1],
            ['Brazil', 'France', 1],
            ['Brazil', 'Spain', 1],
            ['Brazil', 'England', 1],
            ['Canada', 'Portugal', 1],
            ['Canada', 'France', 1],
            ['Canada', 'England', 1],
            ['Mexico', 'Portugal', 1],
            ['Mexico', 'France', 1],
            ['Mexico', 'Spain', 1],
            ['Mexico', 'England', 1],
            ['USA', 'Portugal', 1],
            ['USA', 'France', 1],
            ['USA', 'Spain', 1],
            ['USA', 'England', 1],
            ['Portugal', 'Angola', 1],
            ['Portugal', 'Senegal', 1],
            ['Portugal', 'Morocco', 1],
            ['Portugal', 'South Africa', 1],
            ['France', 'Angola', 1],
            ['France', 'Senegal', 1],
            ['France', 'Mali', 1],
            ['France', 'Morocco', 1],
            ['France', 'South Africa', 1],
            ['Spain', 'Senegal', 1],
            ['Spain', 'Morocco', 1],
            ['Spain', 'South Africa', 1],
            ['England', 'Angola', 1],
            ['England', 'Senegal', 1],
            ['England', 'Morocco', 1],
            ['England', 'South Africa', 1],
            ['South Africa', 'China', 1],
            ['South Africa', 'India', 1],
            ['South Africa', 'Japan', 1],
            ['Angola', 'China', 1],
            ['Angola', 'India', 1],
            ['Angola', 'Japan', 1],
            ['Senegal', 'China', 1],
            ['Senegal', 'India', 1],
            ['Senegal', 'Japan', 1],
            ['Mali', 'China', 1],
            ['Mali', 'India', 1],
            ['Mali', 'Japan', 1],
            ['Morocco', 'China', 1],
            ['Morocco', 'India', 1],
            ['Morocco', 'Japan', 1],
            ['Japan', 'Brazil', 1]
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
