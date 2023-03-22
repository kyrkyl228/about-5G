const ctx = document.getElementById("pieAf");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Samsung", "Huawei", "Ericsson", "Nokia", "Other", "ZTE"],
    datasets: [
      {
        labels: "",
        data: [0, 27, 27, 30, 11, 5],
        backgroundColor: [
          "#929597",
          "#f45128",
          "#1fa5ed",
          "#55ed7b",
          "#020b18",
          "#f1e956",
        ],
        borderWidth: 5,
        borderRadius: 8,
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
        tooltip:{
            enabled: false,
        },
        legend: {
            labels:{
                boxWidth: 40,
                boxHeight: 40,
                font:{
                    size: 20,
                }
            },
            display: true,
            position: 'bottom',
            boxWidth: 511,
            font: 0,
        }
    }
}
});