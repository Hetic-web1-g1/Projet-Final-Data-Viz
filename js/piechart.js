var data_age = [
  {
    label: "36+",
    count: 400,
  },
  {
    label: "24-36",
    count: 5400,
  },
  {
    label: "18-24",
    count: 11200,
  },
  {
    label: "-18",
    count: 3000,
  },
];

var data_plateforme = [
  {
    label: "youtube",
    count: 5200,
  },
  {
    label: "twitch",
    count: 13000,
  },
  {
    label: "Television",
    count: 400,
  },
];

const div = document.getElementById("sondage")
const pie_width = div.offsetWidth / 2;
const pie_height = div.offsetHeight / 2;
var radius = Math.min(pie_width, pie_height) / 2;

var legendRectSize = 25; // Taille carré colorés de la légende
var legendSpacing = 6; // Espace entre les carrés

function draw_chart(data, p_div){

var dataset = data

//color scale
var color = d3.scaleOrdinal().range(["#4e79a7","#f28e2c","#e15759","#76b7b2","#59a14f","#edc949","#af7aa1","#ff9da7","#9c755f","#bab0ab"]);

var svg = d3.select(p_div) 
  .append('svg')
  .attr('class', 'pie')
  .attr('width', pie_width * 2) 
  .attr('height', pie_height) 
  .append('g') 
  .attr('transform', `translate(${7*(pie_width/9)}, ${pie_height/2})`);

var arc = d3.arc()
  .innerRadius(radius - 100)
  .outerRadius(radius); // Taille de la chart

var pie = d3.pie() // Début et fin des angles des segments
  .value(function(d) { return d.count; }) // Extrait les nombres de chaque entrée de notre data
  .sort(null); // par default les valeurs sont triés par ordre descroissant on cancel ça en mettant a null

// define tooltip
var tooltip = d3.select(p_div) 
  .append('div')                                  
  .attr('class', 'tooltip'); 

tooltip.append('div')                          
  .attr('class', 'label');                       

tooltip.append('div')                    
  .attr('class', 'count');                   

tooltip.append('div')   
  .attr('class', 'percent'); 

dataset.forEach(function(d) {
  d.count = +d.count; // calcule le total en naviguant dans la data
  d.enabled = true; // Permet de track quelle entrée est check
});

// chart
var path = svg.selectAll('path')
  .data(pie(dataset)) //Associe le set de data avec le path qu'on créé
  .enter() //crée un placeholder pour chaque valeur
  .append('path') // remplace les placeholders avec les elements du path
  .attr('d', arc) // Défini 'd' avec l'arc
  .attr('fill', function(d) { return color(d.data.label); }) //Utilise le color scale pour definir chaque couleur de segments
  .each(function(d) { this._current - d; }); // animation sympa

path.on('mouseover', function(d) {     
 var total = d3.sum(dataset.map(function(d) { // calcul du nombre de segments de la data        
  return (d.enabled) ? d.count : 0; // si l'entrée n'est pas "enabled" on retourne 0 ce qui aura pour effet d'augmenter les autres pourcentages                                    
  }));                                                      
 var percent = Math.round(1000 * d.data.count / total) / 10; // calcul pourcentage
 tooltip.select('.label').html(d.data.label);           
 tooltip.select('.count').html(d.data.count);            
 tooltip.select('.percent').html(percent + '%');        
 tooltip.style('display', 'block');                     
});                                                           

path.on('mouseout', function() {                       
  tooltip.style('display', 'none'); 
 });

path.on('mousemove', function(d) {          
  tooltip.style('top', (d3.event.layerY + 10) + 'px') 
    .style('left', (d3.event.layerX + 10) + 'px'); 
  });

// légende
var legend = svg.selectAll('.legend') 
  .data(color.domain()) 
  .enter() 
  .append('g')
  .attr('class', 'legend')
  .attr('transform', function(d, i) {                   
    var height = legendRectSize + legendSpacing;     
    var offset =  height * color.domain().length / 2; 
    var horiz = 12 * legendRectSize; 
    var vert = i * height - offset;               
      return 'translate(' + horiz + ',' + vert + ')';      
   });

legend.append('rect')                                  
  .attr('width', legendRectSize)                        
  .attr('height', legendRectSize)                      
  .style('fill', color) 
  .style('stroke', color) 

legend.append('text')                                    
  .attr('x', legendRectSize + legendSpacing)
  .attr('y', legendRectSize - legendSpacing)
  .text(function(d) { return d; }); // return label
}

function update(data) {
  d3.select(".pie").remove();
  draw_chart(data);
}

window.addEventListener("resize", function () {
  update_chart(zevent, "Récolte Zevent", "graphsrecolte");
});

draw_chart(data_age, "#age_pie");