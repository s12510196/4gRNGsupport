function calculate() {
    // timeとhourの値を取得
    var time = parseInt(document.getElementById('time').value);
    var hour = parseInt(document.getElementById('hour').value);
    var frame = parseInt(document.getElementById('frame').value);
    var blankframe = parseInt(document.getElementById('blankframe').value) || 350;
    var resultframe = parseInt(document.getElementById('resultframe').value);
    var gameselect = parseInt(document.getElementById('gameselect').value);
    var continueselect = parseInt(document.getElementById('continueselect').value);
    var true3ds =  document.getElementById('mycheckbox').checked;
    var gapsecond = parseInt(document.getElementById('gapsecond').value);
    console.log(true3ds)


    // timeとhourの合計を計算
    var sum = frame+blankframe;
    var second = Math.floor(sum / 60);
    var year = 2000 + sum % 60;
    var left = time - 10 - second;
    var month = 10;
    var minute = left % 10;
    var day = Math.floor(left / 10);

    if (true3ds) {
        document.getElementById('resultframe').value = (second+gapsecond) * 60;
        document.getElementById('gameselect').value = String(year)+ "年10月" + String(day) + "日" +String(hour)+ "時"+String(minute)+"分"+String(10-gapsecond)+"秒にゲーム選択";
        document.getElementById('continueselect').value = String(year) +"年10月" + String(day) + "日" +String(hour)+ "時"+String(minute)+"分"+String(second + 10)+"秒に続きから";
    }else{
        document.getElementById('resultframe').value = second * 60;
        document.getElementById('gameselect').value = String(year)+ "年10月" + String(day) + "日" +String(hour)+ "時"+String(minute)+"分10秒にゲーム選択";
        document.getElementById('continueselect').value = String(year) +"年10月" + String(day) + "日" +String(hour)+ "時"+String(minute)+"分"+String(second + 10)+"秒に続きから";
    }
}


const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calculate);