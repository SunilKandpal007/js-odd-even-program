function findOddEven(){
    var inputValue = parseInt(document.getElementById("oddEvenValue").value);

    if(isNaN(inputValue)){
        document.getElementById('oddevenResult').style.color = 'Navy';
        document.getElementById('oddevenResult').innerText = `Please input a value first.`;
    }

    else if(inputValue % 2 == 0){
        document.getElementById('oddevenResult').style.color = 'Green';
        document.getElementById('oddevenResult').innerHTML = `Input value <u>${inputValue}</u> is a EVEN Value.`;
    }
    else{
        document.getElementById('oddevenResult').style.color = 'Red';
        document.getElementById('oddevenResult').innerHTML = `Input value <u>${inputValue}</u> is a ODD value.`;
    }
    document.getElementById('oddEvenValue').value = "";
}