# Marlabs-Training-2019
<!DOCTYPE html>
<html>
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="chrome">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Login Form</title>
    <script src="scripts.js"></script>
    </head>
    <body>
    
        <form id="login-form"> 
            <input id="username" type="text" placeholder="Enter Username" value=""/>
            <input id="password" type="password" placeholder="Enter Password" value=""/>
            <button type="button" onclick="login()">login</button>
       </form>
       <form id="Register"> 
            <input id="newUser" type="text" placeholder="New User" value=""/>
            <input id="newPassword" type="password" placeholder="New Password" value=""/>
            <button type="button" onclick="registerUser()">login</button>
       </form> 
    </body>
</html>
var objPeople = [
    {
        username: 'sam',
        password: 'password25'
    },
    {
        username: 'matt',
        password: 'password88'

    },
    {
        username: 'chris',
        password: 'password00'
    }
]

function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value


    for (i = 0; i < objPeople.lenght; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + "is logged in!")
            return
        }

        console.log('Incorrect username or password')

    }

    function registerUser() {
        var registerUser = document.getElementById("newUser").value
        var registerPassword = document.getElementById("newPassword").value
        var newUser = {
            username: registerUser,
            password: registerPassword
        }

        for (i = 0; i < objPeople.lenght; i++) {
            if (registerUser == objPeople[i].username) {
                alert('this username is already in use, try another username')
                return
            } else if (registerPassword.lenght < 8) {
                alert('your password is less than 8 characters')
            }
        }
        objPeople.push(registerUser, registerPassword)
        console.log(objPeople)
    }
login(username, password) : Observable<User>{
    let userAccepted = this.users
    .filter(x => x.username === username)
    .filter(y => y.password === password)
    if(userAccepted && userAccepted.length === 1) {
        localStorage.setItem('currentUser', JSON.stringify({token:"later", name: userAccepted[0].username})
        return Observable.of(userAccepted[0])
    }
    else {
        return Observable.of(null);
    }
}
