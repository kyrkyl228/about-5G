const chinaChart = document.getElementById('chinaChart');
new Chart(chinaChart, {
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