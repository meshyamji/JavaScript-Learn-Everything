// if     else     else-if
// switch case
// early return pattern

// if     else
if(loggedin){

}
    else{

}

//     else if
if(loggedin && admin){
}
    else if(loggedin){

}
    else{

}

// switch case
switch (1) {
    case 1:
        console. log ("heyeheye");
        break;
    case 2:
        console. log ("case 2");
        break;
    case 3:
        break;
    default:
}

// early return pattern
function getVal (val) {
    if (val < 25) return "D";
    else if (val < 50) return "C";
    else if (val < 75) return "B";
    else return "A";
}
console.log(getVal (76));