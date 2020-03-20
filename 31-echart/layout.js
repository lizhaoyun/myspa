$(function () {
    var myChart = echarts.init(document.getElementById('main'));
        var xData=[],
            yData=[];
            // H(p) = -p*log(p)-(1-p)log(1-p)
        for (let p = 0; p<=1; p+=0.01) {
            xData.push(p);
            if(p===0||p===1){
                yData.push(0);
            }else{
                yData.push(-1*p*Math.log2(p)-(1-p)*Math.log2(1-p)); 
            }
        }

        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: xData
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                smooth: true,
                data: yData
            }]
        };
        myChart.setOption(option);
})