// Function to build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      // Get the metadata field
      let metadata = data.metadata;

      // Filter the metadata for the object with the desired sample number
      let result = metadata.find(obj => obj.id == sample);

      // Select the panel with id of `#sample-metadata`
      let panel = d3.select("#sample-metadata");

      // Clear any existing metadata
      panel.html("");

      // Append new key-value pairs to the metadata panel
      Object.entries(result).forEach(([key, value]) => {
          panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  });
}

// Function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      let samples = data.samples;
      let result = samples.find(sampleObj => sampleObj.id == sample);

      let otu_ids = result.otu_ids;
      let otu_labels = result.otu_labels;
      let sample_values = result.sample_values;

      // Build Bar Chart
      let barData = [{
          x: sample_values.slice(0, 10).reverse(),
          y: otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
          text: otu_labels.slice(0, 10).reverse(),
          type: "bar",
          orientation: "h"
      }];

      let barLayout = {
          title: "Top 10 Bacteria Cultures Found",
          margin: { t: 30, l: 150 }
      };

      Plotly.newPlot("bar", barData, barLayout);

      // Build Bubble Chart
      let bubbleData = [{
          x: otu_ids,
          y: sample_values,
          text: otu_labels,
          mode: "markers",
          marker: {
              size: sample_values,
              color: otu_ids,
              colorscale: "Earth"
          }
      }];

      let bubbleLayout = {
          title: "Bacteria Cultures Per Sample",
          margin: { t: 30 },
          hovermode: "closest",
          xaxis: { title: "OTU ID" }
      };

      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
}

// Function for event listener when a new sample is selected
function optionChanged(newSample) {
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      let selector = d3.select("#selDataset");

      let names = data.names;

      names.forEach((sample) => {
          selector.append("option").text(sample).property("value", sample);
      });

      let firstSample = names[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();
