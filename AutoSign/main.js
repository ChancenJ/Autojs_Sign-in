"ui";

var daojucheng = require("./daojucheng.js");
var xiaomishequ = require("./xiaomishequ.js");

var running = null;
var lock = threads.lock();


ui.layout(
  <vertical padding="16">
    <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" margin="5 10" textSize="16sp" />
    <checkbox id="r1" text="掌上道聚城" checked="true" />
    <checkbox id="r2" text="小米社区" checked="true" />
    <button id="start" text="开始运行" />
  </vertical>
);

ui.start.on("click", () => {
  if (auto.service == null) {
    toast("请开启无障碍服务！")
  }

  if (ui.start.getText() == "开始运行") {
    ui.start.setText("停止运行");
    if (ui.r1.isChecked()) {
      threads.start(djc);
    }
    if (ui.r2.isChecked()) {
      threads.start(xmsq);
    }
    device.keepScreenOn()//保持屏幕常亮
  } else {
    ui.start.setText("开始运行");
    device.cancelKeepingAwake()//关闭屏幕常亮
    threads.shutDownAll()
    console.hide()
  }

});



function djc() {
  lock.lock();
  while (running != null) { };
  running = threads.start(daojucheng.start);
  lock.unlock();
  running.join();
  running = null;
}

function xmsq() {
  lock.lock();
  while (running != null) { };
  running = threads.start(xiaomishequ.start);
  lock.unlock();
  running.join();
  running = null;
}