var ctx = document.getElementById('saleChart1').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7"],
    datasets: [{
        label: "訂單總金額",
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
        data: [19000, 21500, 12000, 21000, 16000, 24000, 19100]
      },
      {
        type: 'bar',
        label: "訂單筆數",
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
        data: [1250, 1400, 1370, 1284, 1369, 1583, 1692]
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


var ctx = document.getElementById('saleChart2').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["11/24~30", "12/1~7", "12/8~14", "12/15~21", "12/21~27"],
    datasets: [{
        label: "商家外送費",
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
        data: [6200, 6550, 3290, 2400, 3600]
      },
      {
        label: "協會外送費",
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
        data: [5500, 5000, 6710, 3840, 4500]
      },
      {
        type: 'bar',
        label: "總外送費用",
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
        data: [11700, 11550, 1000, 6240, 8100]
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


var ctx = document.getElementById('saleChart3').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["4月", "5月", "6月", "7月", "10月", "11月", "12月"],
    datasets: [{
        label: "優惠券折扣金額",
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
        data: [25000, 18050, 22090, 24000, 18500, 20490, 22910]
      },
      {
        type: 'bar',
        label: "優惠券筆數",
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
        data: [4800, 4650, 4290, 3685, 4400, 5125, 4890]
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

