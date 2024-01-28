function onSignIn(googleUser) {
  
  alert('succesfully logged in!');
  gapi.auth2.init()
  alert('auth2 initialized!');
  alert(GoogleAuth.isSignedIn.get());
  var auth2 = gapi.auth2.getAuthInstance();
  //var profile = googleUser.getBasicProfile();
  //console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
 // console.log('Name: ' + profile.getName());
  //console.log('Image URL: ' + profile.getImageUrl());
  //console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

var profile = auth2.currentUser.get().getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

  
}

 function signOut() {
   try{
     alert('starting!')
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(
      function () {
      alert('User signed out.');
    });
  }
   catch(e){
     alert('Failed')
   }
 }
