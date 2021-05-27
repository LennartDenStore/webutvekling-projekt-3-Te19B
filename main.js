function termsAndConditions(){
    var TAC = document.querySelector(".TACtext")
    if(TAC.style.display === "none"){
        TAC.style.display = "block";
    }
    else{
        TAC.style.display ="none";
    }
}

function aboutClick(){
    var aC = document.querySelector(".aboutCAD")
    if (aC.style.display === "none"){
        aC.style.display = "block";
    }
    else{
        aC.style.display = "none";
    }
}