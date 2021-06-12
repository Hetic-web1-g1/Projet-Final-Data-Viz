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

sample = agdq

const margin = 60;
const width = 1000 - 2*margin;
const height = 600 - 2*margin;

function draw_bar_chart() {

    const bar_chart = d3.select('#stat_gdq') 
    .append('svg')
    .attr('class', 'bar_chart')
    .attr('width', width) 
    .attr('height', height) 
    .append('g') 
    .attr('transform', `translate(${margin}, ${margin})`);

//BAR CHART

//Axe Y

const axe_yScale = d3.scaleLinear()
    .range([height, 0]) //defini la range divisée entre les values de domain
    .domain([0,4]);

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
    .attr('x', -(height/2) - margin)
    .attr('y', margin / 2.4)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .text('Montant récolté en Million de Dollar')

bar_chart.append('text') //Titre
    .attr('x', width/2 + margin)
    .attr('y', 40)
    .attr('text-anchor', 'middle')
    .text('AGDQ')
}

function update_chart(data){
    sample = data;
    d3.select('.bar_chart').remove()
    draw_bar_chart();
}

draw_bar_chart();