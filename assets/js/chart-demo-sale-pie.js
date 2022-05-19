const ctx = document.getElementById("salePieChart").getContext('2d');
const pieData = {
  labels:["PATIO46沛緹歐美式餐廳", "富貴饅頭店", "印尼小吃Waroeng Podjok", "阿里巴巴小吃", "龍丼亭", "DreamGo Bar", "玉品流行茶飲", "燒酒深夜食堂", "走走麵包", "肉匠爺漢堡專賣店", "其他店家"],
  value:[10, 62, 10, 19, 18, 16, 18, 35, 17, 46, 52]
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
      backgroundColor: ["#33A3D8", "#EF579E", "#82FFBC", "#EFC677", "#AA87F1", "#ED9CF7", "#CFEC94", "#EDA585", "#BE9BEB", "#C1A596", "#ddd"],
      borderColor: ["#fff"],
      hoverBorderColor: ["#454545"],
      borderWidth: 2,
      data: pieData.value,
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