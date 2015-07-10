(function() {
  var width = 1000;
  var height = 500;
  var data = [2, 3, 5, 6, 7, 10, 2, 4, 6, 7, 2, 5, 4, 6, 1, 3, 6, 5, 7, 9, 4, 1, 2, 5, 3, 5, 6, 7, 8, 4, 3, 2, 5, 6];
  // var data = [2, 3];

  var hScale = d3.scale.linear()
              .domain([0, Math.max.apply(null, data)])
              .range([0, height]);

  var wScale = d3.scale.linear()
              .domain([0, data.length])
              .range([0, width]);

  var axis = d3.svg.axis()
            .scale(hScale);

  var bWidth = Math.min(width / (2 * data.length), 50);

  var canvas = d3.select("#histogram")
              .append("svg")
              .attr("width", width)
              .attr("height", height)
              .append("g")
              .attr("transform", "translate(20,0)");

  var bars = canvas.selectAll("rect")
              .data(data)
              .enter()
                .append("rect")
                .attr("width", bWidth)
                .attr("height", function(d) { return hScale(d); })
                .attr("x", function(d, i) { return wScale(i); })
                .attr("fill", "teal");

  canvas.append("g")
    .attr("transform", "translate(0, 400)")
    .call(axis);
})();
