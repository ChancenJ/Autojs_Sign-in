//小米社区
var common = require("./common");

var xiaomishequ = {};

xiaomishequ.start = function () {
    toastLog("启动小米社区");
    sleep(2000);
    launchApp("小米社区");
    sleep(5000);
    if (consoleon == false) {
        console.hide();
    }
    sleep(200);
    var qd = id("sign_button").findOne();
    qd.click();
    sleep(2000);
    var qd2 = text("立即签到").findOne();
    toastLog("点击签到")
    qd2.click();
    sleep(2000);
    if (textContains("已签到").exists()) {
        toastLog("签到成功");
        sleep(1000);
        toast("完成小米社区");
        console.info("完成小米社区");
        if (consoleon == false) {
            common.consoleshow();
        }
        home();
        sleep(500);
    }
    else{
        sleep(2000);
        qd2 = text("立即签到").findOne();
        toastLog("再次尝试点击签到")
        qd2.click();
        sleep(1000);
        if (consoleon == false) {
            common.consoleshow();
        }
        home();
        sleep(500);
    }

}
module.exports = xiaomishequ;