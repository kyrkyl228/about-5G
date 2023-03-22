new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["Latin America", "Africa", "Asia"],
      datasets: [
        {
            label: "Huawei",
            backgroundColor: "#ec1e10",
            data: [10,14,25]
          },         {
            label: "ZTE",
            backgroundColor: "#ecf544",
            data: [2,3,8]
          },        {
            label: "Samsung",
            backgroundColor: "#bbbfbd",
            data: [0,1,9]
          },        {
            label: "Ericsson",
            backgroundColor: "#3191f7",
            data: [10,9,31]
          },        {
            label: "Nokia",
            backgroundColor: "#13ce7a",
            data: [11,7,29]
          },        {
            label: "other",
            backgroundColor: "#1f1e1d",
            data: [4,5,0]
          },
      ]
    },
    options: {
        plugins: {
            tooltip:{
                enabled: false,
            },
            legend: {
                labels:{
                    boxWidth: 35,
                    boxHeight: 35,
                    font:{
                        size: 20,
                    }
                },
                display: true,
                boxWidth: 511,
            }
            
        }
    }
});

new Chart(document.getElementById("bar-chart-grouped-2"), {
    type: 'bar',
    data: {
      labels: ["World"],
      datasets: [
        {
            label: "Huawei",
            backgroundColor: "#ec1e10",
            data: [49]
          },         {
            label: "ZTE",
            backgroundColor: "#ecf544",
            data: [14]
          },        {
            label: "Samsung",
            backgroundColor: "#bbbfbd",
            data: [10]
          },        {
            label: "Ericsson",
            backgroundColor: "#3191f7",
            data: [50]
          },        {
            label: "Nokia",
            backgroundColor: "#13ce7a",
            data: [47]
          },        {
            label: "other",
            backgroundColor: "#1f1e1d",
            data: [9]
          },
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Population growth (millions)'
      }
    }
});