const japChart = document.getElementById('japChart');
new Chart(japChart, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
        tooltip:{
            enabled: false,
        },
        legend: {
            display: false,
        }
    }
}
}); 

const kazChart = document.getElementById('kazChart');
new Chart(kazChart, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
        tooltip:{
            enabled: false,
        },
        legend: {
            display: false,
        }
    }
}
}); 