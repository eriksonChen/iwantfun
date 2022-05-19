var ctx = document.getElementById('memberChart1').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7"],
    datasets: [{
        label: "總會員數",
        borderColor: "#33A3D8",
        pointBackgroundColor: "#33A3D8",
        pointHoverBorderColor: "#33A3D8",
        pointHoverBackgroundColor: "#33A3D8",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        data: [8512, 8601, 8669, 8912, 9240, 9753, 9999]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 13
          }
        }
      }
    }
  }
});


var ctx = document.getElementById('memberChart2').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
    data: {
    labels: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7"],
    datasets: [{
        label: "新註冊數",
        borderColor: "#61D693",
        pointBackgroundColor: "#61D693",
        pointHoverBorderColor: "#61D693",
        pointHoverBackgroundColor: "#61D693",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        data: [122, 325, 99, 267, 105, 65, 231]
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 13
          }
        }
      }
    }
  }
});