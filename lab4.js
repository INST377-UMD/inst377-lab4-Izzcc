const bod = document.body;
bod.style.background = "aliceblue"

document.getElementById("color_changer").addEventListener("click", function() {

    if (bod.style.background === "aliceblue"){
        bod.style.background = "lightpink"   
    } else {
        bod.style.background = "aliceblue"
    }
});

document.getElementById("alert_but").addEventListener("click", function() {
    event.preventDefault();
    var usrName = document.getElementById("usr_name").value;
    
    if (usrName.trim() == "") {
        alert("ENTER A NAME!!!!!")
        return;
    }

    alert("Hi, " + usrName + "!");
});

document.getElementById("val_test").addEventListener("click", function() {
    event.preventDefault()
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var usrText = document.getElementById("tester_text").value;
    
    if (validation.test(usrText)) {
        alert("YOU HAVE A SPECIAL CHARACTER");
    }
});

document.getElementById("add_text_but").addEventListener("click", function() {
    var header = document.getElementById("head");
    
    header.textContent += " add text ";
});
