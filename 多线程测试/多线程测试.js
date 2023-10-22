"ui";

var test1 = require('test1.js');
var test2 = require('test2.js');
var running = null;
var lock = threads.lock();
ui.layout(
    <vertical padding="16">
      <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" margin="5 10" textSize="16sp" />
      //<radiogroup>
        <checkbox id="r1" text="掌上道聚城" checked="true" />
        <checkbox id="r2" text="掌上道聚城2" />
      //</radiogroup>
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
      threads.start(t1);
    }
    
    if (ui.r2.isChecked()) {
      threads.start(t2);
    }
    device.keepScreenOn()//保持屏幕常亮
  } else {
    ui.start.setText("开始运行");
    device.cancelKeepingAwake()//关闭屏幕常亮
    threads.shutDownAll()
    running=null;
    console.hide()
  }

});


function t1(){
    console.show();
    console.info("thread1");
    lock.lock();
    while (running!=null){
        console.info("1阻塞");
        sleep(1000);
        };
    
    running = threads.start(test1.test);
    lock.unlock();
    running.join();
    running = null;
    
    }
    
    
 function t2(){
     console.show();
     console.info("thread2");
    lock.lock();
    while (running!=null){
        console.info("2阻塞");
        sleep(1000);
        };
    
    running = threads.start(test2.test);
    lock.unlock();
    running.join();
    running = null;
    }
    