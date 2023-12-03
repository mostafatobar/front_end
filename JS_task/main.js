/********************** varibales ***********************/
let thArr = ["First Name", "Last Name", "Age", "Gender", "Region", "City"];
let idArr = ["fname", "lname", "age", "gender", "region", "city"];
let ageLo = "";
let genLo = "";
let regLo = "";
let ghaLo = "";
let menLo = "";
let bahLo = "";
let kebLo = "";
let regions = ["Select Region", "Gharbiya", "Menofiya", "Bahry", "kebly"];
let gender = ["Male", "Female", "Other"];
let ghaCity = ["Tanta", "ElSanta", "Kafr_ElZayat", "Mahala"];
let menCity = ["Shebeen", "Quesna", "Ashmoon", "menouf"];
let bahCity = ["Cairo", "Alex","Banha"];
let kebCity = ["Aswan", "Sohaag", "Qena"];
let startOpt = "<option>";
let endOpt = "</option>";

/********************** create table ***********************/
document.write(`
    <table>
        <caption>Registeration</caption>
`);

for( let i = 0; i < thArr.length; i++ ){
    document.write(`
        <tr>
            <th>${thArr[i]}</th>
            <td id="${idArr[i]}"></td>
        </tr>
    `)
}

document.write("</table>");

/********************** loop ***********************/

// age loop
for( let i = 20; i <= 60; i++ ){
    ageLo += startOpt + i + endOpt;
}

// gender loop
for( let i = 0; i < gender.length; i++ ){
    genLo += `<input type="radio" name="gender" value="${gender[i]}"> <span>${gender[i]}</span> <br>`;
}

// region loop
for( let i = 0; i < regions.length; i++ ){
    regLo += startOpt + regions[i] + endOpt;
}


// gha loop
for( let i = 0; i < ghaCity.length; i++ ){
    ghaLo += startOpt + ghaCity[i] + endOpt;
}

// men loop
for( let i = 0; i < menCity.length; i++ ){
    menLo += startOpt + menCity[i] + endOpt;
}

// bah loop
for( let i = 0; i < bahCity.length; i++ ){
    bahLo += startOpt + bahCity[i] + endOpt;
}

// keb loop
for( let i = 0; i < kebCity.length; i++ ){
    kebLo += startOpt + kebCity[i] + endOpt;
}

/********************** print loop ***********************/
document.getElementById('fname').innerHTML = `<input type="text" placeholder="firstname" autocomplete="off" name="firstname">`;
document.getElementById('lname').innerHTML = `<input type="text" placeholder="lasname" autocomplete="off" name="lastname">`;
document.getElementById('age').innerHTML = "<select>" + ageLo + "</select>";
document.getElementById('gender').innerHTML = genLo;
document.getElementById('region').innerHTML = "<select id=\"reg\">" + regLo + "</select>";

document.getElementById('reg').onchange = function(){
    let result = document.getElementById('city');
    let selValue = document.getElementById('reg').value;
    if( selValue == regions[0] ){
        result.innerHTML = "";
    }
    else if( selValue == regions[1] ){
        result.innerHTML = "<select>" + ghaLo + "</select>";
    }
    else if( selValue == regions[2] ){
        result.innerHTML = "<select>" + menLo + "</select>";
    }
    else if( selValue == regions[3] ){
        result.innerHTML = "<select>" + bahLo + "</select>";
    }
    else{
        result.innerHTML = "<select>" + kebLo + "</select>";
    }
}

/********************** css ***********************/
// table css 
let tableCss = document.getElementsByTagName("table")[0];
tableCss.style.cssText = `
    width : 60%;
    margin : 2% auto;
    border : solid 1px #ccc;
    border-collapse : collapse;
    table-layout : fixed`;

// th, td
let allTh = document.getElementsByTagName('th');
let allTd = document.getElementsByTagName('td');
let all_th_td = [...allTd, ...allTh];

for( let i = 0; i < all_th_td.length; i++ ){
    all_th_td[i].style.cssText = `
        border : solid 1px #ccc;
        height : 40px`
}

// caption
let capCss = document.getElementsByTagName("caption")[0];
capCss.style.cssText = `
    font-size :  30px;
    margin-bottom : 3%;
    font-weight : bolder`;

// input css
let allInp = document.getElementsByTagName('input');
for( let i = 0; i < allInp.length; i++ ){
    if( i == 2 ){break;}
    allInp[i].style.cssText  = `
        display : block;
        outline : 0;
        border : none;
        width : 100%;
        height : 100%;
        text-align : center;
    `
}

// select css
let allSel = document.getElementsByTagName('select');
for( let i = 0; i < allSel.length; i++ ){
    allSel[i].style.cssText  = `display : block;
        outline : 0;
        border : none;
        width : 100%;
        height : 100%;
        text-align : center;
    `;
}