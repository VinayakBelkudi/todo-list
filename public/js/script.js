var user = document.querySelector("#user");
var pass = document.querySelector("#pass");
var btn = document.querySelector(".btn");


function doLogin(){
    var val1 = user.value;
    var val2 = pass.value;

    if(val1 != null && val2 != null){
        if(val1 == "admin" && val2 == "admin"){
            // alert("You are an admin!!!");
            window.open("http://localhost:4200/");
        } else{
            alert("You are not an admin!!!");
            console.log("not an");
        }
    }
    
}

btn.addEventListener("click", doLogin);
