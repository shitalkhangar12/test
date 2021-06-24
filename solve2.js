//get first name and get phone number in local storage
var str = localStorage.getItem("name").split(" ")[0];
var getName = document.getElementById("gname");
var getPhone = document.getElementById("pphone");



getName.innerHTML = str;
getPhone.innerHTML = localStorage.getItem("phone");

//reset buttn 
function Reset() {
    document.getElementById("pin").value = "";

}
//generate otp
function otp() {
    var val = Math.floor(1000 + Math.random() * 9000);

    console.log(val);
    return val;
}
var res = otp();
var count = 0;
//submit otp

function submit() {

    var getvalue = parseInt(document.getElementById('pin').value);


    if (window.res == getvalue) {

        alert("verify successfully");
        window.location.href = "http://pixel6.co/";
    } else {
        window.count = window.count + 1;
        Reset();
        window.res = otp();
    }

    console.log(window.count);
    if (window.count == 3) {
        window.location.href = "http://pixel6.co/404pagenotfound";
    }
}