(function() {
  var width = 1000;
  var height = 500;
  var data = [1, 2, 3, 5, 6, 7, 10, 2, 4, 6, 7, 2, 5, 4, 6, 1, 3, 6, 5, 7, 9, 4, 1, 2, 5, 3, 5, 6, 7, 8, 4, 3, 2, 5, 6];
  // var data = [2, 3];

  var hScale = d3.scale.linear()
              .domain([0, Math.max.apply(null, data)])
              .range([height, 0]);

  var wScale = d3.scale.linear()
              .domain([0, data.length - 1])
              .range([0, width]);

  var yAxis = d3.svg.axis()
            .scale(hScale)
            .orient("left");

  var xAxis = d3.svg.axis()
              .scale(wScale)
              .orient("bottom")
              .ticks(data.length);

  var bWidth = Math.min(width / (2 * data.length), 50);

  var margin = {top: 20, right: 30, bottom: 30, left: 40};

  var canvas = d3.select("#histogram")
              .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var bars = canvas.selectAll("rect")
              .data(data)
              .enter()
                .append("rect")
                .attr("width", 10)
                .attr("height", function(d) { return height - hScale(d); })
                .attr("x", function(d, i) { return wScale(i); })
                .attr("y", function(d) { return hScale(d); })
                .attr("fill", "steelblue");

  canvas.append("g")
      .call(yAxis);

  canvas.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);
})();
