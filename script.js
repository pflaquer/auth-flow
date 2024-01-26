const clientId = "45349294622-clh89uspdjaph48v033evuldh4792e07.apps.googleusercontent.com"; // Replace with your Google OAuth2 client ID
const scope = "userinfo.email"; // Adjust requested scope (e.g., "https://www.googleapis.com/auth/drive.readonly")

function handleCredentialResponse(response) {
  alert('logged in!');
  console.log("Logged in!");
  const accessToken = response.credential; // Access token for further API calls
  // Get user information
  fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`)
    .then(response => response.json())
    .then(data => {
      const userInfo = `
        <p>Welcome, ${data.name}!</p>
        <p>Your email: ${data.email}</p>
      `;
      document.getElementById("user-info").innerHTML = userInfo;
    });
}

function onSuccess(googleUser) {
  const id_token = googleUser.getAuthResponse().id_token;
  handleCredentialResponse({ credential: id_token });
}

function onFailure(error) {
  console.error(error);
}

window.onload = function() {
  gapi.load("auth2", function() {
    gapi.auth2.init({
      client_id: clientId,
      scope: scope,
    }).then(function(auth2) {
      const button = document.getElementById("google-login-button");
      button.addEventListener("click", function() {

        alert('attempting sign in');
        auth2.signIn().then(onSuccess, onFailure);
      });
    });
  });
};
