var ctx = document.getElementById("memberDataPieChart1").getContext('2d');
var ctx2 = document.getElementById("memberDataPieChart2").getContext('2d');
var ctx3 = document.getElementById("memberDataPieChart3").getContext('2d');
const pieData = {
  labels:["手機號碼", "Google 帳號", "Facebook", "Line", "Apple ID"],
  value: [300, 210, 240, 150, 50]
}
const pieData2 = {
  labels:["男", "女", "其他"],
  value:[420, 460, 120]
}
const pieData3 = {
  labels:["職業一", "職業二", "職業三", "職業四", "職業五", "其他"],
  value:[280, 120, 180, 170, 130, 120]
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
      backgroundColor: ["#33A3D8", "#EF579E", "#82FFBC", "#EFC677", "#AA87F1"],
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
      backgroundColor: ["#33A3D8", "#EF579E", "#ddd"],
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
      backgroundColor: ["#33A3D8", "#EF579E", "#82FFBC", "#EFC677", "#AA87F1", "#ddd"],
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