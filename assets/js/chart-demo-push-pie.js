// demo pie chart push //
var ctx = document.getElementById("pushPieChart1").getContext('2d');
var ctx2 = document.getElementById("pushPieChart2").getContext('2d');
var ctx3 = document.getElementById("pushPieChart3").getContext('2d');
var ctx4 = document.getElementById("pushPieChart4").getContext('2d');
var ctx5 = document.getElementById("pushPieChart5").getContext('2d');

const pieData = {
  labels:["系統推播", "商家推播"],
  value: [57, 43]
}
const pieData2 = {
  labels:["點閱數", "未點閱數"],
  value:[64, 36]
}
const pieData3 = {
  labels:["系統推播", "商家推播"],
  value:[51, 49]
}
const pieData4 = {
  labels:["點閱數", "未點閱數"],
  value:[69, 31]
}
const pieData5 = {
  labels:["點閱數", "未點閱數"],
  value:[72, 28]
}

// 新增百分比顯示
const customTooltip = {
  callbacks: {
    label: function(context) {
      var label = context.label || '';
      var value = context.formattedValue;
      let sum = 0;
      let dataArr = context.dataset['data'];
      dataArr.map(data => {
        sum += data;
      });
      let percentage = (value*100 / sum).toFixed(2)+"%";
      return `${label} ${value} (${percentage})`;
    }
  }
}


var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: pieData.labels,
    datasets: [{
      label: "Label",
      backgroundColor: ["#33A3D8", "#EF579E"],
      borderColor: ["#fff"],
      hoverBorderColor: ["#454545"],
      borderWidth: 2,
      data: pieData.value
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 13
          }
        }
      },
      tooltip:customTooltip
    }
  }
});

var myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: pieData2.labels,
    datasets: [{
      label: "Label",
      backgroundColor: ["#4DE3A9", "#D786AC"],
      borderColor: ["#fff"],
      hoverBorderColor: ["#454545"],
      borderWidth: 2,
      data: pieData2.value
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 13
          }
        }
      },
      tooltip:customTooltip
    }
  }
});


var myChart3 = new Chart(ctx3, {
  type: 'pie',
  data: {
    labels: pieData3.labels,
    datasets: [{
      label: "Label",
      backgroundColor: ["#33A3D8", "#EF579E"],
      borderColor: ["#fff"],
      hoverBorderColor: ["#454545"],
      borderWidth: 2,
      data: pieData3.value
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 13
          }
        }
      },
      tooltip:customTooltip
    }
  }
});

var myChart4 = new Chart(ctx4, {
  type: 'pie',
  data: {
    labels: pieData4.labels,
    datasets: [{
      label: "Label",
      backgroundColor: ["#4DE3A9", "#D786AC"],
      borderColor: ["#fff"],
      hoverBorderColor: ["#454545"],
      borderWidth: 2,
      data: pieData4.value
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 13
          }
        }
      },
      tooltip:customTooltip
    }
  }
});

var myChart5 = new Chart(ctx5, {
  type: 'pie',
  data: {
    labels: pieData5.labels,
    datasets: [{
      label: "Label",
      backgroundColor: ["#4DE3A9", "#D786AC"],
      borderColor: ["#fff"],
      hoverBorderColor: ["#454545"],
      borderWidth: 2,
      data: pieData5.value
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 13
          }
        }
      },
      tooltip:customTooltip
    }
  }
});