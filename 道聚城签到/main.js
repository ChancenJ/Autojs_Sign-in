"ui";

var daojucheng = require("./daojucheng.js");

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
      threads.start(daojucheng.start);
    }
    device.keepScreenOn()//保持屏幕常亮
  } else {
    ui.start.setText("开始运行");
    device.cancelKeepingAwake()//关闭屏幕常亮
    threads.shutDownAll()
    console.hide()
  }

});
