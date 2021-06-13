const agdq = [
    {
    event: '2012',
    value: 0.15,
    },
    {
    event: '2013',
    value: 0.45,
    },
    {
    event: '2014',
    value: 1.03,
    },
    {
    event: '2015',
    value: 1.57,
    },
    {
    event: '2016',
    value: 1.21,
    },
    {
    event: '2017',
    value: 2.22,
    },
    {
    event: '2018',
    value: 2.26,
    },
    {
    event: '2019',
    value: 2.40,
    },
    {
    event: '2020',
    value: 3.13,
    },
    {
    event: '2021',
    value: 2.75,
    },
];

const sgdq = [
    {
    event: '2012',
    value: 0.05,
    },
    {
    event: '2013',
    value: 0.25,
    },
    {
    event: '2014',
    value: 0.72,
    },
    {
    event: '2015',
    value: 1.21,
    },
    {
    event: '2016',
    value: 1.29,
    },
    {
    event: '2017',
    value: 1.79,
    },
    {
    event: '2018',
    value: 2.17,
    },
    {
    event: '2019',
    value: 3.04,
    },
    {
    event: '2020',
    value: 2.34,
    },
];

const evo_twitch = [
    {
    event: 'Jan',
    value: 0.92,
    },
    {
    event: 'Fev',
    value: 1.01,
    },
    {
    event: 'Mar',
    value: 0.99,
    },
    {
    event: 'Avril',
    value: 1.62,
    },
    {
    event: 'Mai',
    value: 1.59,
    },
    {
    event: 'Juin',
    value: 1.43,
    },
    {
    event: 'Juil.',
    value: 1.41,
    },
    {
    event: 'Août',
    value: 1.42,
    },
    {
    event: 'Sep',
    value: 1.41,
    },
    {
    event: 'Oct',
    value: 1.68,       
    },
    {
    event: 'Nov',
    value: 1.66,        
    },
    {
    event: 'Dec',
    value: 1.71,        
    },
    {
    event: 'Janv',
    value: 2.01,        
    },
    {
    event: 'Fevr',
    value: 1.88,        
    },
    {
    event: 'Mars',
    value: 2.05,        
    }
]

sample = agdq

function draw_bar_chart(nom, nomdiv) {

    var domain = [0,4];
    if (sample == agdq || sample == sgdq){
        domain = [0,4];
        legende = 'Montant récolté en Million de Dollar';
    } 
    else if (sample == evo_twitch){
        domain = [0.9,2.1];
        legende = 'Heures de vues en Milliard';
    }

    const div = document.getElementById(nomdiv)

    const margin = 60;
    const width = div.offsetWidth / 2;
    const height = div.offsetHeight / 2;

    const bar_chart = d3.select(`#${nomdiv}`) 
    .append('svg')
    .attr('class', 'bar_chart')
    .attr('width', width) 
    .attr('height', height) 
    .append('g') 
    .attr('transform', `translate(${margin*2}, ${margin})`);

//BAR CHART

//Axe Y

const axe_yScale = d3.scaleLinear()
    .range([height, 0]) //defini la range divisée entre les values de domain
    .domain(domain);

bar_chart.append('g')
    .call(d3.axisLeft(axe_yScale));

//Axe X

const axe_xScale = d3.scaleBand()
    .range([0, width])
    .domain(sample.map((s) => s.event))
    .padding(0.2);

bar_chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(axe_xScale));

// Grille

// chart.append('g') //Barres Verticales
//   .attr('class', 'grid')
//   .attr('transform', `translate(0, ${height})`)
//   .call(d3.axisBottom()
//     .scale(axe_xScale)
//     .tickSize(-height, 0, 0)
//     .tickFormat(''))

bar_chart.append('g') //Barres Horizontales
    .attr('class', 'grid')
    .call(d3.axisLeft()
    .scale(axe_yScale)
    .tickSize(-width, 0, 0)
    .tickFormat(''))

// Barres

BarreGroup = bar_chart.selectAll() //Crée un rectangle pour chaque membre de l'array
    .data(sample) // determine quel élément du DOM doit etre modifié
    .enter() // Pour pas que ça bug si jamais il manque des éléments si la data est plus grande que le selectAll
    .append('g')

BarreGroup
.append('rect')
    .attr('class', 'bar')
    .attr('x', (s) => axe_xScale(s.event))
    .attr('y', (s) => axe_yScale(s.value))
    .attr('height', (s) => height - axe_yScale(s.value))
    .attr('width', axe_xScale.bandwidth())
    .on('mouseenter', function (s, i) {
        d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 0.6)
        .attr('x', (s) => axe_xScale(s.event) - 5)
        .attr('width', axe_xScale.bandwidth() + 10)
        d3.select(this.parentNode).append('text')
            .attr('class', 'value')
            .attr('x', (s) => axe_xScale(s.event) + axe_xScale.bandwidth() / 2)
            .attr('y', (s) => axe_yScale(s.value) + 20)
            .attr('text-anchor', 'middle')
            .text((s) => `${s.value}`)

    
    // const y = axe_yScale(s.value)

    // chart.append('line')
    // .attr('class', 'limite')
    // .attr('x1', 0)
    // .attr('y1', y)
    // .attr('x2', width)
    // .attr('y2', y)
    // .attr('stroke', 'red')
    })

    .on('mouseleave', function () {
    d3.selectAll('.value')
        .attr('opacity', 1)

    d3.select(this)
        .transition()
        .duration(300)
        .attr('opacity', 1)
        .attr('x', (s) => axe_xScale(s.event))
        .attr('width', axe_xScale.bandwidth())

    //chart.selectAll('.limite').remove()
    bar_chart.selectAll('.value').remove()
    })      

// Texte

bar_chart.append('text') //Légende
    .attr('x', -(height/2) )
    .attr('y', -margin)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text(legende)

bar_chart.append('text') //Titre
    .attr('x', width/2)
    .attr('y', -40)
    .attr('text-anchor', 'middle')
    .text(nom)
}

function update_chart(data, nom, nom_div){
    sample = data;
    d3.select('.bar_chart').remove()
    draw_bar_chart(nom, nom_div);
}

draw_bar_chart('AGDQ', 'stat_gdq', [0,4]);
sample = evo_twitch
draw_bar_chart('Evolution de twitch', 'twitchevo', [0.9,2.1]);