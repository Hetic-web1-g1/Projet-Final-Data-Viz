const agdq = [
  {
    event: "2012",
    value: 0.15,
  },
  {
    event: "2013",
    value: 0.45,
  },
  {
    event: "2014",
    value: 1.03,
  },
  {
    event: "2015",
    value: 1.57,
  },
  {
    event: "2016",
    value: 1.21,
  },
  {
    event: "2017",
    value: 2.22,
  },
  {
    event: "2018",
    value: 2.26,
  },
  {
    event: "2019",
    value: 2.4,
  },
  {
    event: "2020",
    value: 3.13,
  },
  {
    event: "2021",
    value: 2.75,
  },
];

const sgdq = [
  {
    event: "2012",
    value: 0.05,
  },
  {
    event: "2013",
    value: 0.25,
  },
  {
    event: "2014",
    value: 0.72,
  },
  {
    event: "2015",
    value: 1.21,
  },
  {
    event: "2016",
    value: 1.29,
  },
  {
    event: "2017",
    value: 1.79,
  },
  {
    event: "2018",
    value: 2.17,
  },
  {
    event: "2019",
    value: 3.04,
  },
  {
    event: "2020",
    value: 2.34,
  },
];

const zevent = [
  {
    event: "2017",
    value: 0.59,
  },
  {
    event: "2018",
    value: 1.33,
  },
  {
    event: "2019",
    value: 4.28,
  },
  {
    event: "2020",
    value: 6.98,
  },
];

const pic_zevent = [
  {
    event: "2017",
    value: 109392,
  },
  {
    event: "2018",
    value: 405033,
  },
  {
    event: "2019",
    value: 592006,
  },
  {
    event: "2020",
    value: 600796,
  },
];

const evo_twitch = [
  {
    event: "01/20",
    value: 0.92,
  },
  {
    event: "02/20",
    value: 1.01,
  },
  {
    event: "03/20",
    value: 0.99,
  },
  {
    event: "04/20",
    value: 1.62,
  },
  {
    event: "05/20",
    value: 1.59,
  },
  {
    event: "06/20",
    value: 1.43,
  },
  {
    event: "07/20.",
    value: 1.41,
  },
  {
    event: "08/20",
    value: 1.42,
  },
  {
    event: "09/20",
    value: 1.41,
  },
  {
    event: "10/20",
    value: 1.68,
  },
  {
    event: "11/20",
    value: 1.66,
  },
  {
    event: "12/20",
    value: 1.71,
  },
  {
    event: "01/21",
    value: 2.01,
  },
  {
    event: "02/21",
    value: 1.88,
  },
  {
    event: "03/21",
    value: 2.05,
  },
];

const comparaison_rentabilite = [
  {
    event: "Theleton",
    fonds: 77,
    couts: 19,
    rentabilite: 24,
  },
  {
    event: "Zevent",
    fonds: 5.7,
    couts: 0.1,
    rentabilite: 1.70
  },
  {
    event: "AGDQ",
    fonds: 3.13,
    couts: 0.25,
    rentabilite: 7.98
  },
  {
    event: "SGDQ",
    fonds: 2.31,
    couts: 0.08,
    rentabilite: 3.46
  },
];

const sondage_watch = [
  {
      name: "yes",
      value: 89.4,
  },
  {
      name: "no",
      value: 10.6,
  },  
];

const sondage_watch_s = [
  {
      name: "yes",
      value: 93.8,
  },
  {
      name: "no",
      value: 6.2,
  },  
];

const sondage_donate = [
  {
      name: "yes",
      value: 60.6,
  },
  {
      name: "no",
      value: 39.4,
  },  
];

const sondage_reason = [
  {
      label: "other",
      value: 3.2,
  },
  {
      label: "content",
      value: 80,
  },  
  {
      label: "cause",
      value: 60.8,
  },
  {
      label: "event",
      value: 81.6,
  },
  {
      label: "streamer",
      value: 90,
  },
];

function draw_bar_chart(nom, nomdiv) {
  const div = document.getElementById(nomdiv);
  const margin = 60;
  var width = div.offsetWidth / 2;
  var height = div.offsetHeight / 2;

  if (sample == agdq || sample == sgdq) {
    height = div.offsetHeight / 2.2;
    domain = [0, 4];
    legende = "Amount raised in millions of dollars";
    color_range = ["#5D353A","#6C000D"]
  } else if (sample == evo_twitch) {
    width = div.offsetWidth / 1.2;
    domain = [0.9, 2.1];
    legende = "Viewing hours in billions";
    color_range = ["#5D3993", "#6229B8"]
  } else if (sample == zevent) {
    domain = [0, 7];
    legende = "Amount raised in millions of dollars";
    color_range = ["#303E55","#001F55"]
  } else if (sample == pic_zevent) {
    domain = [0, 650000];
    legende = "";
    color_range = ["#303E55","#001F55"]
  }  

  const bar_chart = d3
    .select(`#${nomdiv}`)
    .append("svg")
    .attr("class", `bar_chart${nomdiv}`)
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${margin * 2}, ${margin})`);

  var color = d3.scaleLinear()
    .domain(domain)
    .range(color_range)
  
  //BAR CHART

  //Axe Y

  const axe_yScale = d3
    .scaleLinear()
    .range([height, 0]) //defini la range divisée entre les values de domain
    .domain(domain);

  bar_chart.append("g").call(d3.axisLeft(axe_yScale));

  //Axe X

  const axe_xScale = d3
    .scaleBand()
    .range([0, width])
    .domain(sample.map((s) => s.event))
    .padding(0.2);

  bar_chart
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(axe_xScale));

  // Grille

  // chart.append('g') //Barres Verticales
  //   .attr('class', 'grid')
  //   .attr('transform', `translate(0, ${height})`)
  //   .call(d3.axisBottom()
  //     .scale(axe_xScale)
  //     .tickSize(-height, 0, 0)
  //     .tickFormat(''))

  bar_chart
    .append("g") //Barres Horizontales
    .attr("class", "grid")
    .call(
      d3.axisLeft().scale(axe_yScale).tickSize(-width, 0, 0).tickFormat("")
    );

  // Barres

  BarreGroup = bar_chart
    .selectAll() //Crée un rectangle pour chaque membre de l'array
    .data(sample) // determine quel élément du DOM doit etre modifié
    .enter() // Pour pas que ça bug si jamais il manque des éléments si la data est plus grande que le selectAll
    .append("g");

  BarreGroup.append("rect")
    .attr("class", "bar")
    .attr("x", (s) => axe_xScale(s.event))
    .attr("y", (s) => axe_yScale(s.value))
    .attr("height", (s) => height - axe_yScale(s.value))
    .attr("width", axe_xScale.bandwidth())
    .attr('fill', function(d,i) {return color(i);})
    .on("mouseenter", function (s, i) {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("opacity", 0.6)
        .attr("x", (s) => axe_xScale(s.event) - 5)
        .attr("width", axe_xScale.bandwidth() + 10);
      d3.select(this.parentNode)
        .append("text")
        .attr("class", "value")
        .attr("x", (s) => axe_xScale(s.event) + axe_xScale.bandwidth() / 2)
        .attr("y", (s) => axe_yScale(s.value) + 20)
        .attr("text-anchor", "middle")
        .text((s) => `${s.value}`);

      // const y = axe_yScale(s.value)

      // chart.append('line')
      // .attr('class', 'limite')
      // .attr('x1', 0)
      // .attr('y1', y)
      // .attr('x2', width)
      // .attr('y2', y)
      // .attr('stroke', 'red')
    })

    .on("mouseleave", function () {
      d3.selectAll(".value").attr("opacity", 1);

      d3.select(this)
        .transition()
        .duration(300)
        .attr("opacity", 1)
        .attr("x", (s) => axe_xScale(s.event))
        .attr("width", axe_xScale.bandwidth());

      //chart.selectAll('.limite').remove()
      bar_chart.selectAll(".value").remove();
    });

  // Texte

  bar_chart
    .append("text") //Légende
    .attr("class", "legende")
    .attr("x", -(height / 2))
    .attr("y", -margin)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text(legende);

  bar_chart
    .append("text") //Titre
    .attr("x", width / 2)
    .attr("y", -40)
    .attr("text-anchor", "middle")
    .text(nom);
}

function update_chart(data, nom, nom_div) {
  sample = data;
  d3.selectAll(`.bar_chart${nom_div}`).remove();
  draw_bar_chart(nom, nom_div);
}

function button_callback(button_class){
  var button = document.getElementsByClassName(button_class);

  function addSelectClass(){
    removeSelectClass();
    this.classList.add('on');	
  }

  function removeSelectClass(){
    for (var i =0; i < button.length; i++) {
      button[i].classList.remove('on')
    }
  }
    
  for (var i =0; i < button.length; i++) {
    button[i].addEventListener("click",addSelectClass);
  }
}

function draw_bar_chart_rent(nomdiv) {

  var domain = [0, 100];
  var sample = comparaison_rentabilite;
  var color_range = ["#555555","#6C000D"]

  const div = document.getElementById(nomdiv);

  const margin = 60;
  const width = div.offsetWidth / 2;
  const height = div.offsetHeight / 2;

  const bar_chart = d3
    .select(`#${nomdiv}`)
    .append("svg")
    .attr("class", `bar_chart${nomdiv}`)
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${margin * 6}, ${margin})`);

  //Axe Y
  const axe_yScale = d3
    .scaleLinear()
    .range([height, 0]) //defini la range divisée entre les values de domain
    .domain(domain);

  bar_chart.append("g").call(d3.axisLeft(axe_yScale));

  //Axe X
  const axe_xScale = d3
    .scaleBand()
    .range([0, width])
    .domain(sample.map((s) => s.event))
    .padding(0.2);

  bar_chart
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(axe_xScale));

  BarreGroup = bar_chart
    .selectAll() //Crée un rectangle pour chaque membre de l'array
    .data(sample) // determine quel élément du DOM doit etre modifié
    .enter() // Pour pas que ça bug si jamais il manque des éléments si la data est plus grande que le selectAll
    .append("g");

  bar_chart
    .append("g") //Barres Horizontales
    .attr("class", "grid")
    .call(
      d3.axisLeft().scale(axe_yScale).tickSize(-width, 0, 0).tickFormat("")
    );
    // Barres

  BarreGroup = bar_chart
  .selectAll() //Crée un rectangle pour chaque membre de l'array
  .data(sample) // determine quel élément du DOM doit etre modifié
  .enter() // Pour pas que ça bug si jamais il manque des éléments si la data est plus grande que le selectAll
  .append("g");

  BarreGroup.append("rect")
    .attr("class", "bar")
    .attr("x", (s) => axe_xScale(s.event))
    .attr("y", (s) => axe_yScale(100))
    .attr("height", (s) => height - axe_yScale(100))
    .attr("width", axe_xScale.bandwidth())
    .attr('fill', color_range[0])
    .on("mouseenter", function (s, i) {
      d3.select(this)
        .transition()
        .duration(300)
        .attr("opacity", 0.6)
        .attr("x", (s) => axe_xScale(s.event) - 5)
        .attr("width", axe_xScale.bandwidth() + 10);
      d3.select(this.parentNode)
        .append("text")
        .attr("class", "value")
        .attr("x", (s) => axe_xScale(s.event) + axe_xScale.bandwidth() / 2)
        .attr("y", (s) => axe_yScale(100) + 20)
        .attr("text-anchor", "middle")
        .text((s) => `fonds: ${s.fonds}M`);
      d3.select(this.parentNode)
        .append("text")
        .attr("class", "value")
        .attr("x", (s) => axe_xScale(s.event) + axe_xScale.bandwidth() / 2)
        .attr("y", (s) => axe_yScale(100) + 45)
        .attr("text-anchor", "middle")
        .text((s) => `cout: ${s.couts}M`);
      d3.select(this.parentNode)
        .append("text")
        .attr("class", "value")
        .attr("x", (s) => axe_xScale(s.event) + axe_xScale.bandwidth() / 2)
        .attr("y", (s) => axe_yScale(100) + 70)
        .attr("text-anchor", "middle")
        .text((s) => `${s.rentabilite}%`);
        console.log(i)
      d3.select(this.parentNode).select(".bar_2")
        .transition()
        .duration(300)
        .attr("opacity", 0.6)
        .attr("x", (s) => axe_xScale(s.event) - 5)
        .attr("width", axe_xScale.bandwidth() + 10);
    })

    .on("mouseleave", function (s,i) {
      d3.selectAll(".value").attr("opacity", 1);

      d3.select(this)
        .transition()
        .duration(300)
        .attr("opacity", 1)
        .attr("x", (s) => axe_xScale(s.event))
        .attr("width", axe_xScale.bandwidth());
      d3.select(this.parentNode).select(".bar_2")
        .transition()
        .duration(300)
        .attr("opacity", 1)
        .attr("x", (s) => axe_xScale(s.event))
        .attr("width", axe_xScale.bandwidth());
      //chart.selectAll('.limite').remove()
      bar_chart.selectAll(".value").remove();
    });

  BarreGroup.append("rect")
    .attr("class", "bar_2")
    .attr("x", (s) => axe_xScale(s.event))
    .attr("y", (s) => axe_yScale(s.rentabilite))
    .attr("height", (s) => height - axe_yScale(s.rentabilite))
    .attr("width", axe_xScale.bandwidth())
    .attr('fill', color_range[1])
}

function draw_bar_chart_sondage(nomdiv, sample){

  var sample = sample;
  var color_range = ["#555555","#6C000D"];

  const div = document.getElementById(nomdiv);

  const width = div.offsetWidth / 2;
  const height = div.offsetHeight;

  const bar_chart = d3
    .select(`#${nomdiv}`)
    .append("svg")
    .attr("class", `bar_chart${nomdiv}`)
    .attr("width", width)
    .attr("height", height)
    .append("g")

  BarreGroup = bar_chart
  .selectAll() //Crée un rectangle pour chaque membre de l'array
  .data(sample) // determine quel élément du DOM doit etre modifié
  .enter() // Pour pas que ça bug si jamais il manque des éléments si la data est plus grande que le selectAll
  .append("g");

  BarreGroup.append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", 0)
    .attr("height", 50)
    .attr("width", sample[0].value/100*width)
    .attr('fill', color_range[0])

  BarreGroup.append("rect")
    .attr("class", "bar_2")
    .attr("x", sample[0].value/100*width)
    .attr("y", 0)
    .attr("height", 50)
    .attr("width", sample[1].value/100*width)
    .attr('fill', color_range[1])

  BarreGroup
    .append("text") 
    .attr("x", 40)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .text(sample[0].value+"%");

  BarreGroup
    .append("text") 
    .attr("x", 40+width)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .text(sample[1].value+"%");
}

function draw_vertical_bar_chart(nomdiv) {

  const div = document.getElementById(nomdiv);
  const domain = [0,100]
  var width = div.offsetWidth / 2;
  var height = div.offsetHeight;

  const bar_chart = d3
    .select(`#${nomdiv}`)
    .append("svg")
    .attr("class", `bar_chart${nomdiv}`)
    .attr("width", width)
    .attr("height", height)
    .append("g")
  
  //BAR CHART

  //Axe Y

  const axe_yScale = d3
    .scaleBand()
    .range([height, 0]) //defini la range divisée entre les values de domain
    .domain(sample.map((s) => s.label))
    .padding(0.4);

  //Axe X

  const axe_xScale = d3
    .scaleLinear()
    .range([0, width])
    .domain(domain);

  // Barres

  BarreGroup = bar_chart
    .selectAll() //Crée un rectangle pour chaque membre de l'array
    .data(sample) // determine quel élément du DOM doit etre modifié
    .enter() // Pour pas que ça bug si jamais il manque des éléments si la data est plus grande que le selectAll
    .append("g");

  BarreGroup.append("rect")
    .attr("class", "bar")
    .attr("x", 100)
    .attr("y", (s) => axe_yScale(s.label))
    .attr("height", axe_yScale.bandwidth())
    .attr("width", (s) => axe_xScale(s.value))
    .attr('fill', '#6C000D')

  BarreGroup
    .append("text") 
    .attr("x", (s) => axe_xScale(s.value) + 10 + 100)
    .attr("y", (s) => axe_yScale(s.label) + axe_yScale.bandwidth() - 10)
    .attr("text-anchor", "left")
    .text((s) => s.value+"%");

  BarreGroup
    .append("text") //legende
    .attr("x", 0)
    .attr("y",(s) => axe_yScale(s.label) + 25)
    .attr("text-anchor", "left")
    .text((s) => (s.label));
}

window.addEventListener("resize", function () {
  update_chart(agdq, "AGDQ", "stat_gdq")
  update_chart(evo_twitch, "Evolution of Twitch", "twitchevo");
  update_chart(zevent, "", "stat_z-event");
});

button_callback("button_gdq")
button_callback("button_zevent")

sample = agdq;
draw_bar_chart("", "stat_gdq");
sample = evo_twitch;
draw_bar_chart("Evolution of Twitch", "twitchevo");
sample = zevent;
draw_bar_chart("", "stat_z-event");
draw_bar_chart_rent("comparaison")
draw_bar_chart_sondage("sondage1", sondage_watch)
draw_bar_chart_sondage("sondage2", sondage_watch_s)
draw_bar_chart_sondage("sondage3", sondage_donate)
sample = sondage_reason
draw_vertical_bar_chart("sondage4")