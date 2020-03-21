$(function () {
    var myChart = echarts.init(document.getElementById('main'));
        var xData=[],
            yData=[],
            initData=[6,9,8,8,7];
        for (let p = 2000,q=0; p<=2015,q<initData.length; p+=5,q++) {
            xData.push(p);
            yData.push(initData[q]); 
        }

        var option = {
            title: {
                text: 'JavaScript语言排名变化'
            },
            tooltip: {},
            xAxis: {
                data: xData
            },
            yAxis: {},
            series: [{
                type: 'line',
                data: yData
            }]
        };
        myChart.setOption(option);
})