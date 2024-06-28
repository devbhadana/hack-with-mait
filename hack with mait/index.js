firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("login.html")
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      
    } 
  });