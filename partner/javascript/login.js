function loginUser() {
    const mail = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repeatpassword = document.getElementById('confirmPassword').value;
    const operation = 'loginUser';
    
    hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            this.responseText;
        }
    };
    
    xmlhttp.open("POST", "../php/operations.php");
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.setRequestHeader("Content-Type", "application/json");

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4) {
        console.log(xmlhttp.status);
        console.log(xmlhttp.responseText);
      }
  };

    let data = `{
      "operation": "` + operation + `",
      "email": "` + mail + `",
      "password": "` + hashCode(password) + `",
    }`;

    xmlhttp.send(data);
}