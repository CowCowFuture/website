var toggle = document.getElementById("toggle");

toggle.onclick = function() {
    if (document.getElementById("clicked").innerHTML == "") {
        document.getElementById("clicked").innerHTML = "S T O N K S";
    }
    else {
        document.getElementById("clicked").innerHTML = "";
    }
}
