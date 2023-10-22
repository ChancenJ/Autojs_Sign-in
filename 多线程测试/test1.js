var test1={};

test1.test = function (){
    console.show();
    console.log("test1");
    i=0;
    while(i<10){
        console.log(i);
        sleep(1000);
        i=i+1;
    }
}

module.exports = test1;