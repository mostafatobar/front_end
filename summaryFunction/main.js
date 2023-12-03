function summary(){
    let result = document.getElementById('result');
    let data = document.getElementById('num').value;
    // trim text 
    let txt = data.trim();

    // convert t txt.split(",")xt to array
    let arr1 = txt.split(",");

    // function to chnage type from string to number
    function changeType(value, index, array){
        return parseFloat(value);
    }

    // create number array from string array
    let numbers = arr1.map(changeType);

    // sum => 
    let total = 0;
    for( let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    
    result.innerHTML = `
        <div>SUM = ${total}</div>
        <div>AVG = ${total / numbers.length}</div>
        <div>MAX = ${Math.max(...numbers)}</div>
        <div>MIN = ${Math.min(...numbers)}</div>
        <div>COUNT = ${numbers.length}</div>
    `
}

document.getElementById('btn1').addEventListener("click", summary);

/**********************************/
document.getElementById('btn2').onclick = function(){
    let len = document.getElementById('count').value;
    let inpLo = "";

    for( let i = 1; i <= len; i++ ){
        inpLo += `<span>Number ${i}: </span> <input type="number" value="0"><br><br>`;
    }
    
    document.getElementById('print').innerHTML = inpLo ;
    document.getElementById('btn3').style.display = "block  "
}

function summary_two(){
    let allInp = document.querySelectorAll("#print input");
    let txt = "";
    // put inputs value in one string
    for( let i = 0; i < allInp.length; i++ ){
        if( i == (allInp.length - 1) ){
            txt += allInp[i].value;
        }
        else{
            txt += allInp[i].value + ",";
        }
    }

    // convert t txt.split(",")xt to array
    let arr1 = txt.split(",");

    // function to chnage type from string to number
    function changeType(value, index, array){
        return parseFloat(value);
    }

    // create number array from string array
    let numbers = arr1.map(changeType);

    // sum => 
    let total = 0;
    for( let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    
    document.getElementById("result2").innerHTML = `
        <div>SUM = ${total}</div>
        <div>AVG = ${total / numbers.length}</div>
        <div>MAX = ${Math.max(...numbers)}</div>
        <div>MIN = ${Math.min(...numbers)}</div>
        <div>COUNT = ${numbers.length}</div>
    `


}

document.getElementById('btn3').addEventListener("click", summary_two)