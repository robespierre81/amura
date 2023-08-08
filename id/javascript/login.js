function loginUser() {
    const mail = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const operation = 'loginUser';

    hashCode = s => s.split('').reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a
        }, 0);
        
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.open("POST", "../php/operations.php");
    xmlhttp.setRequestHeader("Accept", "application/json");
    xmlhttp.setRequestHeader("Content-Type", "application/json");

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            localStorage.setItem('isLoggedIn', this.responseText);
            window.location.href = 'https://dashboard.amura.io';
        }
    };

    let data = `{
      "operation": "` + operation + `",
      "email": "` + mail + `",
      "password": "` + hashCode(password) + `"
    }`;

    xmlhttp.send(data);
}