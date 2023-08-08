function saveNewUser() {
    firstname = document.getElementById('firstName').value;
    surname = document.getElementById('name').value;
    const mail = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmPassword').value;
    const operation = 'newUser';
    
    hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);

    if(surname.split(/[ ,]+/).length > 1) {
        firstname = surname.split(/[ ,]+/)[0];
        surname = surname.split(/[ ,]+/)[1];
    } 
    
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open("POST", "../php/operations.php");
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.setRequestHeader("Content-Type", "application/json");

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            alert(this.responseText);
        }
    };

    let data = `{
      "operation": "` + operation + `",
      "firstname": "` + firstname + `",
      "surname": "` + surname + `",
      "email": "` + mail + `",
      "password": "` + hashCode(password) + `",
      "repeatpassword": "` + hashCode(confirmpassword) + `"
    }`;

    xmlhttp.send(data);
}