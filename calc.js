let old_num = "0"
let operation = ""
function f(id){
    let from_id = document.getElementById(id).innerHTML;
    let from_rezult = document.getElementById("rezult").innerHTML;
    if(from_rezult === "0"){document.getElementById("rezult").innerHTML = "";}
    let from_length = from_rezult.length;
    if(from_length > 7){fail;}
    document.getElementById("rezult").innerHTML += from_id;
}


function act(act){
    let num = parseInt(document.getElementById("rezult").innerHTML);
    old_num = num;
    operation = act;
    document.getElementById("arhiv").innerHTML  = "";
    document.getElementById("rezult").setAttribute("style",  "margin-left: 0px");
    document.getElementById("rezult").innerHTML = "";
}

function equal (){
    document.getElementById("rezult").innerHTML = eval(old_num + operation +  document.getElementById("rezult").innerHTML);
    document.getElementById("arhiv").innerHTML = "";
}

function clearAll(){
    console.log("Clearing")
    document.getElementById("rezult").innerHTML = "0";
    document.getElementById("arhiv").innerHTML = "";
}

function deleteLast(){
    let lastNum = document.getElementById("rezult").innerHTML;
    document.getElementById("rezult").innerHTML = (lastNum.substring(0, lastNum.length - 1))
}
