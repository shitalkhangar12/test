// JavaScript source code
function validation() {
    var user = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone');




    //name validation
    if (user == "") {
        document.getElementById('fname').innerHTML = "please fill the name";
        return false;
    }
    if (user.length < 4) {
        document.getElementById('fname').innerHTML = "please fill greater than 4 character ";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById('fname').innerHTML = "number not allowedi";
        return false;

    }
    //phone number validatin
    if (phone.value == "") {
        document.getElementById('mob').innerHTML = "please fill phone number ";

        return false;
    }

    //email validation

    if (email == "") {
        document.getElementById('addr').innerHTML = "please fill the email";
        return false;
    }
    const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
    if (email.match(pattern)) {
        return true;
    } else {
        document.getElementById('addr').innerHTML = "invalid email";
        return false;
    }



}

//get phone number imformation

function verify() {
    var phone = document.getElementById('phone');
    var mystring = parseInt(phone.value.substr(0, 3));

    if (mystring >= 621 && mystring <= 799) {
        //jio icon
        var img = document.createElement("img");

        img.src = "jio.png";

        var src = document.getElementById("mob");
        src.appendChild(img);
        src.insertBefore(img, src.childNodes[0])

        //jio sim
        var node = document.createElement("b");
        var textnode = document.createTextNode("   Jio");
        node.appendChild(textnode);
        document.getElementById('mob').appendChild(node);

    } else if (mystring >= 801 && mystring <= 920) {
        // idea icon
        var img = document.createElement("img");

        img.src = "idea.png";

        var src = document.getElementById("mob");
        src.appendChild(img);
        src.insertBefore(img, src.childNodes[0])
            //idea sim

        var node = document.createElement("b");
        var textnode = document.createTextNode("   Idea");
        node.appendChild(textnode);
        document.getElementById('mob').appendChild(node);

    } else if (mystring >= 921 && mystring <= 999) {
        //vodafone icon
        var img = document.createElement("img");

        img.src = "vodafone.png";

        var src = document.getElementById("mob");
        src.appendChild(img);
        src.insertBefore(img, src.childNodes[0])
            //vodafone sim

        var node = document.createElement("b");
        var textnode = document.createTextNode("   Vodafone");
        node.appendChild(textnode);
        document.getElementById('mob').appendChild(node);

    } else {
        document.getElementById('mob').innerHTML = "Invalid number";
    }

}
/*
//local storage
window.onload = function() {
        if (localStorage) {
            document.getElementByName('myform').addEventListener('submit', function() {
                // Get the value of the name field.
                var Name = document.getElementById('name').value;
                var Email = document.getElementById('email').value;
                var phoneNumber = document.getElementById('phone').value;
                // Save the name in localStorage.
                localStorage.setItem('name', Name);
                localStorage.setItem('Email', Email);
                localStorage.setItem('phoneNumber', phoneNumber);
                alert("save");
            });
        }
    } */


//store data local storage
var user = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');


var saveButton = document.getElementById("save");

function saveResponses() {
    localStorage.setItem("name", user.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
}
saveButton.addEventListener("click", saveResponses);