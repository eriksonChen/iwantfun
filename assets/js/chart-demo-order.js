var ctx = document.getElementById('orderChart1').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7"],
    datasets: [{
        label: "到店自取",
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
        data: [10900, 11000, 12000, 11000, 14000, 16500, 10100]
      },
      {
        label: "商家外送",
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
        data: [15000, 11500, 11700, 12040, 14000, 13050, 11000]
      },
      {
        label: "協會外送",
        borderColor: "#EF579E",
        pointBackgroundColor: "#EF579E",
        pointHoverBorderColor: "#EF579E",
        pointHoverBackgroundColor: "#EF579E",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        data: [9250, 14000, 9370, 12084, 13069, 15083, 16092]
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


var ctx = document.getElementById('orderChart2').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["11/24~30", "12/1~7", "12/8~14", "12/15~21", "12/21~27"],
    datasets: [{
        label: "到店自取",
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
        data: [3200, 2055, 4329, 2040, 3450]
      },
      {
        label: "商家外送",
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
        data: [3500, 4999, 3790, 3840, 4500]
      },
      {
        label: "協會外送",
        borderColor: "#EF579E",
        pointBackgroundColor: "#EF579E",
        pointHoverBorderColor: "#EF579E",
        pointHoverBackgroundColor: "#EF579E",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        data: [3550, 3695, 3270, 3484, 3900]
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


var ctx = document.getElementById('orderChart3').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["4月", "5月", "6月", "7月", "10月", "11月", "12月"],
    datasets: [{
        label: "到店自取",
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
        data: [4500, 5805, 5290, 4400, 3850, 4090, 4290]
      },
      {
        label: "商家外送",
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
        data: [4500, 5999, 3790, 2840, 4150, 3950, 4900]
      },
      {
        label: "協會外送",
        borderColor: "#EF579E",
        pointBackgroundColor: "#EF579E",
        pointHoverBorderColor: "#EF579E",
        pointHoverBackgroundColor: "#EF579E",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        data: [5510, 5495, 6270, 4684, 3400, 2383, 4892]
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

var ctx = document.getElementById('orderChart4').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7"],
    datasets: [{
        label: "訂單完成",
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
        data: [13900, 13100, 21200, 31500, 21400, 36250, 25010]
      },
      {
        label: "訂單取消",
        borderColor: "#EF579E",
        pointBackgroundColor: "#EF579E",
        pointHoverBorderColor: "#EF579E",
        pointHoverBackgroundColor: "#EF579E",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        data: [3400, 3310, 4370, 3385, 3290, 3235, 3050]
      },
      {
        label: "訂單異常",
        borderColor: "#82FFBC",
        pointBackgroundColor: "#82FFBC",
        pointHoverBorderColor: "#82FFBC",
        pointHoverBackgroundColor: "#82FFBC",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        data: [1295, 1250, 1270, 1240, 1200, 1235, 1260]
      },
      {
        label: "未取餐",
        borderColor: "#EFC677",
        pointBackgroundColor: "#EFC677",
        pointHoverBorderColor: "#EFC677",
        pointHoverBackgroundColor: "#EFC677",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        data: [2065, 2090, 2070, 3985, 2295, 2955, 2545]
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


var ctx = document.getElementById('orderChart5').getContext("2d");

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["11/24~30", "12/1~7", "12/8~14", "12/15~21", "12/21~27"],
    datasets: [{
        label: "訂單完成",
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
        data: [5000, 4100, 3200, 4100, 5400, 4650, 4010]
      },
      {
        label: "訂單取消",
        borderColor: "#EF579E",
        pointBackgroundColor: "#EF579E",
        pointHoverBorderColor: "#EF579E",
        pointHoverBackgroundColor: "#EF579E",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        data: [400, 310, 370, 385, 290, 235, 350]
      },
      {
        label: "訂單異常",
        borderColor: "#82FFBC",
        pointBackgroundColor: "#82FFBC",
        pointHoverBorderColor: "#82FFBC",
        pointHoverBackgroundColor: "#82FFBC",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        data: [295, 250, 270, 240, 200, 235, 260]
      },
      {
        label: "未取餐",
        borderColor: "#EFC677",
        pointBackgroundColor: "#EFC677",
        pointHoverBorderColor: "#EFC677",
        pointHoverBackgroundColor: "#EFC677",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
        pointRadius: 6,
        fill: true,
        backgroundColor: "transparent",
        borderWidth: 3,
        data: [65, 90, 70, 85, 95, 55, 45]
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