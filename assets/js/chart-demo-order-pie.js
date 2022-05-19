var ctx = document.getElementById("orderPieChart1").getContext('2d');
var ctx2 = document.getElementById("orderPieChart2").getContext('2d');

const pieData = {
  labels:["到店自取", "商家外送", "協會外送"],
  value:[32, 38, 30]
}
const pieData2 = {
  labels:["訂單完成", "訂單取消", "訂單異常", "未取餐"],
  value:[32, 34, 30, 4]
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
      backgroundColor: ["#33A3D8", "#EF579E", "#82FFBC"],
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
      tooltip: customTooltip
    }
  }
});

var myChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: pieData2.labels,
    datasets: [{
      label: "Label",
      backgroundColor: ["#33A3D8", "#EF579E", "#82FFBC", "#EFC677"],
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