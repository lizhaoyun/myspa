var np = {};                // Notepad 主程序对象

np.config = {
    'appContainer': '.notepad-app'
};

np.bShowStatusBar = false;   // 是否显示状态栏
np.bLineWrap = false;
np.fontFamily = 'Arial';     // 默认字体
np.fontStype = '常规';       // 默认字体样式
np.fontSize = '16';          // 默认字体大小：16pt

np.fontHandler = function (e) {
    np.fontFamily = e.family;
    np.fontStype = e.style;
    np.fontSize = e.size;

    $editor.setFont(e);
};

$(function () {
    $menubar.show(np.menuData);
    $editor.show({
        keyupHandler: function (row, col) {
            $statusBar.setRowCol(row, col);
        }
    });
    $editor.setFont({
        family: np.fontFamily,
        style: np.fontStype,
        size: np.fontSize
    });
    $statusBar.init();
    $statusBar.display(false);

    var $noteditor = $('.notepad-editor');

    $noteditor.click(function () {
        console.log('nbj');
        $menubar.hideMenu();
        $editor.focus();
    });
});