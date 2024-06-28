function performLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
   

    console.log('email: ' + email);
    console.log('Password: ' + password);
}
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let SignInUser = evt=>{
        evt.preventDefault();

        signInWithEmailAndPassword(auth,emial.value,password.value)
        .then((credentials)=>{
            console.log(credentials);
        })
        .catch((error)=>{
            alert(error.message);
            console.log(error.code);
            console.log(error.message); 
        })

    }
    Mainform.addEventListener('submit',SignInUser);

