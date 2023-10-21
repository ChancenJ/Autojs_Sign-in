"ui";

ui.layout(
  <vertical padding="16">
    <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" margin="5 10" textSize="16sp" />
    <radiogroup>
      <radio id="r1" text="掌上道聚城" checked="true" />
    </radiogroup>
    <button id="start" text="开始运行" />
  </vertical>
);

ui.start.on("click", () => {
  if (auto.service == null) {
    toast("请开启无障碍服务！")
  }

  if (ui.start.getText() == "开始运行") {
    ui.start.setText("停止运行");
    if (ui.r1.checked == true) {
      threads.start(daojucheng);
    }
    device.keepScreenOn()//保持屏幕常亮
  } else {
    ui.start.setText("开始运行");
    device.cancelKeepingAwake()//关闭屏幕常亮
    threads.shutDownAll()
    console.hide()
  }

});


function daojucheng() {
  setScreenMetrics(1440, 3200);
  //var sex = dialogs.singleChoice("请选择应用", ["掌上道聚城", "test"], 0);
  //toast("选择了第" + (sex + 1) + "个选项");
  //var applist = ["掌上道聚城", "test"];
  toastLog("启动掌上道聚城")
  launchApp("掌上道聚城");
  //console.show();
  //console.setSize(device.width / 2, device.height / 6);
  sleep(5000);
  var wd = className("android.widget.RadioButton").text("我的").findOne();
  console.log("点击我的");
  sleep(500);
  wd.click();

  sleep(500);
  var jd = className("android.view.View").desc("我的聚豆").findOne();
  console.log("点击我的聚豆");
  console.log(jd.bounds().centerX(), jd.bounds().centerY());
  sleep(500);
  click(jd.bounds().centerX(), jd.bounds().centerY());

  sleep(2000);
  //console.hide();
  console.log("滑到底部")
  swipe(500, 1800, 500, 400, 150);
  sleep(500);

  if (desc("更多聚豆任务").exists()) {
    var t2 = desc("更多聚豆任务").findOne();
    console.log("点击更多聚豆任务");
    console.log(t2.bounds().centerX(), t2.bounds().centerY());
    sleep(500);
    click(t2.bounds().centerX(), t2.bounds().centerY());

  }
  sleep(2000);


  youlixiang();//有理想
  sleep(3000);
  libaodaren();//礼包达人
  sleep(3000);
  xianshihuodong();//限时活动
  sleep(3000);
  liulanhuodong();//浏览3个活动
  sleep(3000);
  huodongzhongxin();//打卡活动中心
  sleep(3000);

  dakaibaoxiang();//打开宝箱1
  sleep(3000);
  dakaibaoxiang();//打开宝箱2
  sleep(3000);

  console.log("结束运行");
}




function libaodaren() {
  if (desc("礼包达人").exists()) {
    var task1 = desc("礼包达人").findOne();
    console.log("礼包达人");
    console.log(task1.bounds().top, task1.bounds().bottom);
    sleep(500);
    if (desc("去完成").boundsInside(1087, task1.bounds().top, 1335, task1.bounds().top + 157).exists()) {
      var go1 = desc("去完成").boundsInside(1087, task1.bounds().top, 1335, task1.bounds().top + 157).findOne();
      go1.click();
      sleep(2000);
      var sy = desc("手游").findOne();
      click(sy.bounds().centerX(), sy.bounds().centerY());
      sleep(2000);
      var wz = desc("王者荣耀").findOne();
      click(wz.bounds().centerX(), wz.bounds().centerY());
      sleep(2000);
      var lq = desc("一键领取").findOne();
      click(lq.bounds().centerX(), lq.bounds().centerY());
      sleep(2000);
      var gx = boundsInside(252, 1937, 336, 2021).clickable(true).findOne();
      gx.click();
      sleep(2000);
      var qr = desc("确认").findOne();
      click(qr.bounds().centerX(), qr.bounds().centerY());
      sleep(5000);
      var qr2 = desc("确认").findOne();
      click(qr2.bounds().centerX(), qr2.bounds().centerY());
      sleep(1000);
      back();
      sleep(2000);
      back();
      sleep(2000);
    }
    sleep(2000);
    task1 = desc("礼包达人").findOne();
    sleep(300);
    if (desc("领取奖励").boundsInside(1050, task1.bounds().top, 1350, task1.bounds().top + 157).exists()) {
      desc("领取奖励").boundsInside(1050, task1.bounds().top, 1350, task1.bounds().top + 157).click();
      sleep(2000);
      desc("开心收下").click();
    }
    //console.show(true);
    sleep(300);
    //console.info("完成礼包达人");
    toastLog("完成礼包达人");
  }
}

function liulanhuodong() {
  if (descContains("浏览3个活动").exists()) {
    var title = descContains("浏览3个活动").findOne();
    console.log("浏览3个活动");
    sleep(500);
    if (desc("去浏览").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).exists()) {
      var go = desc("去浏览").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).findOne();
      go.click();
      sleep(2000);
      console.log("浏览活动1");
      click(device.width / 2, 1104);
      sleep(3000);
      back();
      sleep(2000);
      console.log("浏览活动2");
      click(device.width / 2, 2217);
      sleep(3000);
      back();
      sleep(2000);
      console.log("浏览活动3");
      click(device.width / 2, 3100);
      sleep(3000);
      back();
      sleep(2000);
      back();
    }
    sleep(2000);
    title = descContains("浏览3个活动").findOne();
    sleep(300);
    if (desc("领取奖励").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).exists()) {
      console.log("领取奖励");
      desc("领取奖励").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).click();
      sleep(2000);
      desc("开心收下").click();
    }
    sleep(300);
    toastLog("完成浏览3个活动");
  }

}

function huodongzhongxin() {
  if (descContains("打卡活动中心").exists()) {
    var title = descContains("打卡活动中心").findOne();
    console.log("打卡活动中心");
    sleep(500);
    if (desc("去完成").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).exists()) {
      var go = desc("去完成").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).findOne();
      go.click();
      sleep(3000);
      back();
    }
    sleep(2000);
    title = descContains("打卡活动中心").findOne();
    sleep(300);
    if (desc("领取奖励").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).exists()) {
      console.log("领取奖励");
      desc("领取奖励").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).click();
      sleep(2000);
      desc("开心收下").click();
    }
    sleep(300);
    toastLog("完成打卡活动中心");
  }

}

function dakaibaoxiang() {
  if (descContains("打开宝箱").exists()) {
    var title = descContains("打开宝箱").findOne();
    console.log("打开宝箱");
    sleep(300);
    click(title.bounds().centerX(), title.bounds().centerY());
    sleep(2000);
    desc("开心收下").click();
    sleep(300);
    toastLog("完成打开宝箱");
  }

}

function xianshihuodong() {
  if (descContains("去参与").exists()) {
    var title = descContains("去参与").findOne();
    console.log("限时活动");
    sleep(300);
    click(title.bounds().centerX(), title.bounds().centerY());
    sleep(3000);
    back();
    sleep(2000);
    if (desc("领取奖励").exists()) {
      console.log("领取奖励");
      desc("领取奖励").click();
      sleep(2000);
      desc("开心收下").click();
    }
    sleep(300);
    toastLog("完成限时活动");
  }

}

function youlixiang() {
  if (descContains("有理想").exists()) {
    var title = descContains("有理想").findOne();
    console.log("有理想");
    sleep(500);
    if (desc("去完成").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).exists()) {
      var go = desc("去完成").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).findOne();
      go.click();
      sleep(3000);
      var sy = desc("手游").findOne();
      click(sy.bounds().centerX(), sy.bounds().centerY());
      sleep(2000);
      var cf = descContains("穿越火线：").findOne();
      click(cf.bounds().centerX(), cf.bounds().centerY());
      sleep(2000);
      var gx = boundsInside(258, 1950, 342, 2034).clickable(true).findOne();
      gx.click();
      sleep(2000);
      var qr = desc("确认").findOne();
      click(qr.bounds().centerX(), qr.bounds().centerY());
      sleep(2000);
      var xz = descContains("8.3折").findOne();
      click(xz.bounds().centerX(), xz.bounds().centerY());
      sleep(2000);
      var xy = descContains("我要许愿").boundsInside(0, 7*device.height/8, device.width, device.height).findOne();
      click(xy.bounds().centerX(), xy.bounds().centerY());
      sleep(5000);
      back();
      sleep(2000);
      back();
    }
    sleep(2000);
    title = descContains("有理想").findOne();
    sleep(300);
    if (desc("领取奖励").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).exists()) {
      console.log("领取奖励");
      desc("领取奖励").boundsInside(1050, title.bounds().top, 1350, title.bounds().top + 157).click();
      sleep(2000);
      desc("开心收下").click();
    }
    sleep(300);
    toastLog("完成有理想");
  }
}