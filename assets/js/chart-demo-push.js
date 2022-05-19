var ctx = document.getElementById('pushChart1').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7"],
    datasets: [{
        label: "發送人數",
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
        data: [1000, 1150, 1200, 1100, 1600, 1400, 1910]
      },
      {
        label: "點閱數",
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
        data: [500, 1150, 790, 840, 1500, 950, 1100]
      },
      {
        type: 'bar',
        label: "點閱率 (%)",
        borderColor: "#EF579E",
        pointBackgroundColor: "#EF579E",
        pointHoverBorderColor: "#EF579E",
        pointHoverBackgroundColor: "#EF579E",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "#EF2583",
        borderWidth: 0,
        data: [50, 100, 70, 84, 69, 83, 92]
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


var ctx = document.getElementById('pushChart2').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["11/24~30", "12/1~7", "12/8~14", "12/15~21", "12/21~27"],
    datasets: [{
        label: "發送人數",
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
        data: [1500, 1550, 1290, 1400, 1500]
      },
      {
        label: "點閱數",
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
        data: [500, 999, 790, 840, 1500]
      },
      {
        type: 'bar',
        label: "點閱率 (%)",
        borderColor: "#EF579E",
        pointBackgroundColor: "#EF579E",
        pointHoverBorderColor: "#EF579E",
        pointHoverBackgroundColor: "#EF579E",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "#EF2583",
        borderWidth: 0,
        data: [50, 95, 70, 84, 100]
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


var ctx = document.getElementById('pushChart3').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["4月", "5月", "6月", "7月", "10月", "11月", "12月"],
    datasets: [{
        label: "發送人數",
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
        data: [2500, 2550, 2290, 2400, 2500, 2490, 2910]
      },
      {
        label: "點閱數",
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
        data: [1500, 1999, 1790, 1840, 1150, 1950, 2100]
      },
      {
        type: 'bar',
        label: "點閱率 (%)",
        borderColor: "#EF579E",
        pointBackgroundColor: "#EF579E",
        pointHoverBorderColor: "#EF579E",
        pointHoverBackgroundColor: "#EF579E",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "#EF2583",
        borderWidth: 0,
        data: [50, 95, 70, 84, 100, 83, 92]
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

