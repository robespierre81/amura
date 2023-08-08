function saveNewUser() {
    firstname = "";
    surname = document.getElementById('name').value;
    const mail = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatpassword = document.getElementById('confirmPassword').value;
    const operation = document.getElementById('operation').value;
    
    if(surname.split(/[ ,]+/).length > 1) {
        firstname = surname.split(/[ ,]+/)[0];
        surname = surname.split(/[ ,]+/)[1];
    } 
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
    
    xmlhttp.open("POST", "../php/operations.php?operation=" 
            + operation 
            + "firstname=" + firstname
            + "surname=" + surname
            + "password=" + password
            + "repeatpassword=" + repeatpassword
    , true);
    xmlhttp.send();
}