$(function() {
    var container = document.getElementById("main");
    var data = [
        ['Java', 1, '降','-0.01%'],
        ['C', 2, '升','+2.44%'],
        ['Python', 3, '升','+1.41%'],
        ['C++', 4, '降','-2.58%'],
        ['C#', 5, '升','+2.07%'],
        ['Visual Basic .NET', 6, '降','-1.17%'],
        ['JavaScript', 7, '降','-0.85%']
      ];

    var hot=new Handsontable(container,{
        data: data,
        rowHeaders: true,
        colHeaders: true,
        rowHeaders:false,
        autoRowSize: true,
        rowHeights:45,
        colWidths:150,
        className: "htCenter htMiddle",
        colHeaders: ['语言名称','排名','升或降','变化幅度']
    });
});