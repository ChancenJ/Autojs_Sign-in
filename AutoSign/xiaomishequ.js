//小米社区

var xiaomishequ={};

xiaomishequ.start=function(){
    toastLog("启动小米社区");
    sleep(1000);
    launchApp("小米社区");
    sleep(5000);
    var qd = id("sign_button").findOne();
    qd.click();
    sleep(2000);
    if(textContains("立即签到").exists()){
        var qd2 = text("立即签到").findOne();
        toastLog("点击签到")
        qd2.click();
        sleep(2000);
    }
    if(textContains("已签到").exists()){
        toastLog("签到成功");
        sleep(1000);
        toastLog("完成小米社区")
        home()
    }

}
module.exports = xiaomishequ;