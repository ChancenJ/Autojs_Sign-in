//掌上穿越火线
var common = require("./common");

var zhangshangcf = {};

zhangshangcf.start = function () {
    toastLog("启动掌上穿越火线");
    sleep(2000);
    launchApp("掌上穿越火线");
    sleep(6000);
    if (consoleon == false) {
        console.hide();
    }
    sleep(200);
    var menu = id("tgt_title_nav_menu").findOne();
    menu.click();
    console.log("点击左上角菜单");
    sleep(2000);
    var go = id("layout_slide_menu_top_score").findOne();
    go.click();
    console.log("进入签到页面");
    sleep(2000);
    var qd = textContains("点击签到").findOne().parent();
    toastLog("点击签到")
    qd.click();
    sleep(2000);
    
    if (textContains("已签到").exists()) {
        toastLog("签到成功");
        sleep(1000);
        toast("完成掌上穿越火线");
        console.info("完成掌上穿越火线");
        if (consoleon == false) {
            common.consoleshow();
        }
        home();
        sleep(500);
    }

}
module.exports = zhangshangcf;