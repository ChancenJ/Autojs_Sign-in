var test2={};

test2.test = function (){
    console.show();
    console.log("test2");
    i=0;
    while(i<10){
        console.log("2i：",i);
        sleep(1000);
        i=i+1;
    }
}

module.exports = test2;