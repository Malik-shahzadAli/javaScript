var array = [];
let methodsArray =['push','pop','includes','join','indexOf','reverse','shift','unshift','fill','sort','slice'];
document.addEventListener("DOMContentLoaded", function(){
    for(let i=0; i< methodsArray.length; i++){
       document.getElementById("option").innerHTML += '<option >' + methodsArray[i] + '</option>';
    }
});
function changeArray(){
    var selectedOption = document.getElementById("option");
    var textValue = document.getElementById("value");
    if(selectedOption.value == "push"){
        array.push(textValue.value);
        textValue.value = '';
    }else if(selectedOption.value == "pop"){
        array.pop();
    }else if(selectedOption.value == "includes"){
        document.getElementById("bool").innerHTML = array.includes(textValue.value)
    }else if(selectedOption.value == "join"){
        document.getElementById("bool").innerHTML = array.join(textValue.value);
    }
    else if(selectedOption.value == "indexOf"){
        document.getElementById("bool").innerHTML = array.indexOf(textValue.value);
    }
    else if(selectedOption.value == "reverse"){
      array = [...array.reverse()];
    }
    else if(selectedOption.value == "shift"){
        array.shift();
    }
    else if(selectedOption.value == "unshift"){
        array.unshift(textValue.value);
    }
    else if(selectedOption.value == "fill"){
        array.fill(textValue.value);
    }else if(selectedOption.value == "sort"){
       array =  array.sort();

    }else if(selectedOption.value == "slice"){
        let start = document.getElementById("firstIndex").value;
        let end = document.getElementById("secoundIndex").value;
        document.getElementById("bool").innerHTML =  '<br>The <code>slice()</code> method returns a shallow copy of a portion of an array into a new array <br> Output: <code>['+array.slice(start,end)+'] </code>';
 
     }
    document.getElementById("arr").innerHTML = array;
}
function changeArrayMethod(){
    document.getElementById("firstIndex").style.display = 'none';
    document.getElementById("secoundIndex").style.display = 'none';
    var selectedOption = document.getElementById("option");
    let makeDisable = false;
    let text=""
    if(selectedOption.value == "pop"){
        makeDisable = true;
    }else if(selectedOption.value == "sort"){
    text=`Sort only work on the Characters and sort data on the base of First 
         Character Code So Don't use this method on Numbers`
    }else if(selectedOption.value == "slice"){
        document.getElementById("firstIndex").style.display = 'block';
        document.getElementById("secoundIndex").style.display = 'block';
    }
    document.getElementById("sortDescription").innerHTML = text;
    document.getElementById("value").disabled = makeDisable;
}
