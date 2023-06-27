let $USER = document.getElementById("exampleFormControlInput1").value;

function validacion(){
        
    if($USER == ''){
        $USER = document.querySelector("input");
        $USER.style.borderColor="red";
        alert("Campo de Usuario obligatorio");
    }
}

function cambiaColor(){
    $USER = document.querySelector("input");
    $USER.style.borderColor="";
}





