//import test from "./functions/test.js";
//import Homie from "../views/Home.js";


let userdat;
let DEV_MODE;
let routes =['Home'];
let currentroute = routes[0]; 

//new requests... user object has .requests with array number. if that number doesn't match the requests document number, then no new. if it does then new...
/*
db.collection(users).doc(UID).get()
  .then((doc) => {
    if (doc.exists) {
      const data = doc.data();
      console.log("Document data:", data);
	    alert(data);
    } else {
      console.log("No such document!");
    }
  }).catch((error) => {
    console.error("Error getting document:", error);
  });
  */

//DEV_MODE = parseInt(window.prompt('Choose Your Mode 0 or 1'));
//test();
DEV_MODE = 0;
let userObj = {
	newRequests:false
}
//if localStorage.getItem(session.isActive)
let APP ={
	isAuthorized:true,
	sessionID:localStorage.getItem(10)
}

/*
function updateProf(){
	uxelements.forEach((x)=>{
			if(x.value!=user.x.value)
	db.collection('users').doc(user.UID).update({
		x.id:x.vlaue
				
	});
};
*/
console.log(APP);
let markers;
let genrefilter = 'Country';
markers = [];
markers.push(1);
/*
function filterGenre(genre){
	markers.all.forEach((x)=>{
    if(x.title!===genre){
    x.map=null;
    }
    else{x.map=globalMap}
    
  })
};
  */
console.log(localStorage.getItem(20));
console.log(localStorage.getItem("UID"));
 const firebaseConfig = {
      apiKey: "AIzaSyCYFXrxtMjO2nlpsspIFxX1d2YovJJAHzg",
    authDomain: "buskitv2.firebaseapp.com",
    projectId: "buskitv2",
    storageBucket: "buskitv2.firebasestorage.app",
    messagingSenderId: "317559494128",
    appId: "1:317559494128:web:43ab1f124decf85782f935"
    };
//setTimeout(()=>{
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore(app,"buskitv2");

   console.log(db.collection('markers').get());

//},3000);
function hireBusker(){
  //alert("Request Submitted!");
	const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

document.querySelector(".hirebtn").addEventListener("click", function() {
  modal.style.display = "block";
  modalContent.classList.add("show");
});



	
	
document.querySelector(".close").addEventListener("click", function() {
  modal.style.display = "none";
  modalContent.classList.remove("show");
});

window.onclick = e => {
  if (e.target == modal) {
    modal.style.display = "none";
    modalContent.classList.remove("show");
  }
};
}

function hireModal(){

	return `

<style>

.hirebtn {
  padding: 12px 12px;
  font-size: 14px;
  text-decoration: none;
  background-color: #1e90ff;
  color: #fff;
  transition: 0.2s all;
  box-shadow: 9px 10px 38px -18px rgba(0, 0, 0, 1);
  cursor: pointer;
  border-radius: 4px;
  width:75%;
  

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
}


</style>
    <a class="hirebtn" value="1"onclick="hireBusker(this.value)">Hire Busker &#9995;</a>

<script>
alert('loaded!');
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

document.querySelector(".hirebtn").addEventListener("click", function() {
  modal.style.display = "block";
  modalContent.classList.add("show");
});

document.querySelector(".close").addEventListener("click", function() {
  modal.style.display = "none";
  modalContent.classList.remove("show");
});

window.onclick = e => {
  if (e.target == modal) {
    modal.style.display = "none";
    modalContent.classList.remove("show");
  }
};


/*function hireBusker(){
  alert();
}
*/
</script>
`
}

function buttonFilter(genre){
	return `<div class="buttonFilter"><button>Filter</button> <select id="genres" name="genres" onchange='alert("Filter Applied!");console.log(markers); markers.forEach((x)=>
 {
 /*if(x.title!==genrefilter){x.map=null;}
else{x.map=globalMap}
    */
    x.map=globalMap;
    console.log(markers);
    //x.visible=true;
  })'>
    <option value="Jazz">Jazz</option>
    <option value="HipHop">HipHop</option>
    <option value="Country">Country</option>
    <option value="Pop">Pop</option>
  </select></div>
 `
}

let globalMap;

let user;
let events;

let btns = document.getElementById("pulse");
let useremail = localStorage.getItem(2);
let username = localStorage.getItem(3);
let type = localStorage.getItem(4);

//change this to a different number
let UID = btoa(useremail);


console.log(UID);
//check if doc exists, if not, create it
function setUserFirestore(x){
	console.log('creating new user document and associated marker..');
	db.collection('users').doc(x).set({
                email: useremail,
               username:username,
		venmo:'',
		instagram:'',
		soundcloud:'',
		type:'user',
		isActive:false
                
            });
	db.collection('markers').doc(x).set({
               lat:35,
		lng:75
                
            });
	
	console.log('Successfully Added...');
}

const docRef = db.collection('users').doc(UID);
            docRef.get()
                .then((docSnap) => {
                    if (docSnap.exists) {
                        const userData = docSnap.data();
			    userdat = userData;
                        console.log('User Exists:',userData);
		    }
else{
	setUserFirestore(UID);
};
		});


let genreselect = ['Rock','HipHop','Country','Ska']
class busker{
	constructor(name,genre,type,soundcloud,instagram){
		this.name = name;
		this.genre = genre;
		this.type = type;
		this.soundcloud = soundcloud;
		this.instagram = instagram;
	}
}
let state = {
	isLoggedIn:null,
	isBusking:null,
	currentView:null
}

let genres = ['rock','hiphop','classical','jazz'];
let buskers = {
  all:[],
  jazz:[],
  hiphop:[],
  classical:[],
  rock:[]
}



let markericon = 'https://raw.githubusercontent.com/pflaquer/auth-flow/main/assets/marker-';
let performertype = ['music','guitar','microphone'];

events = [];
//let custommarker = 'https://raw.githubusercontent.com/pflaquer/auth-flow/main/marker.png'
//let custommarker = 'https://raw.githubusercontent.com/pflaquer/auth-flow/main/assets/mic.svg.png';
//let custommarker = 'https://raw.githubusercontent.com/pflaquer/auth-flow/main/assets/mic2.svg.png';
let altmarker = {
	//url:'https://cdn-icons-png.flaticon.com/512/481/481546.png',
	url:markericon+performertype[parseInt(Math.random()*4)]+'.png',
	scaledSize: new google.maps.Size(50, 50), // scaled size
    
};
let custommarker = altmarker;
//let livemarker = 'https://raw.githubusercontent.com/pflaquer/auth-flow/main/marker.png';


let livemarker = altmarker;
let venues = []
let userimg = localStorage.getItem(1);
user = {
	payment:'www.paypal.com/pxdr0',
img:'https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/default.jpeg',
  genre:'Rock',
	instagram:'http://www.instagram.com/pxdr0',
	soundcloud:'http://www.soundcloud.com/pxdr0'
}

user.img = userimg;
document.getElementById("profileimg").setAttribute('src',user.img)
class venue{
  constructor(name,description,img){
    this.name = name;
    this.description = description;
    this.img = img;
  }
}


let unionsquarepark = new venue('Union Square Park','Happening Little Park Located in Lower West Side','http://')


var input_search = document.getElementById("input-search");
var bodyMain = document.getElementsByTagName("body")[0];

document.getElementById("search").addEventListener("click", () => {
  toggleOfClass(input_search, "show");
});

document.getElementById("menu").addEventListener("click", () => {
  toggleOfClass(bodyMain, "show-responsive-menu");
});

document.getElementById("back-sidebar").addEventListener("click", () => {
  toggleOfClass(bodyMain, "show-responsive-menu");
});

function toggleOfClass(element, ClassName) {
  let status = element.classList.contains(ClassName);
  if (status) {
    element.classList.remove(ClassName);
  } else {
    element.classList.add(ClassName);
  }
  return status;
}


var map = null;
//var buskers = [];
let latitude;
let longitude;

let loggedin = false;
let centerCoordinates = {
		lat:40.6958,
		lng:-73.9120,
	}


function randomGenre(){
  return genres[parseInt(genres.length*Math.random())]
}

function randomuserimg(){
		return 'https://randomuser.me/api/portraits/med/men/'+parseInt(Math.random()*100)+'.jpg'
	}

function GENERATEBUSKERS(){
for(x=0;x<30;x++){
  let randomuser = {
    lat:40.6958+Math.random(),
    lng:-73.9171+Math.random(),
    genre:randomGenre(),
    img:randomuserimg()
  }
  switch(randomuser.genre){
    case 'jazz':
      
      
      buskers.jazz.push(randomuser);
      break;
    case 'hiphop':
     buskers.hiphop.push(randomuser);
    case 'classical':
      break;
    case 'rock':
      buskers.rock.push(randomuser);
      break;
	  case 'pop':
		  buskers.pop.push(randomuser);
		  break;
      
  }
  
buskers.all = buskers.jazz.concat(buskers.rock,buskers.classical,buskers.hiphop,buskers.pop)
}
}


if(DEV_MODE!=1){
	GENERATEBUSKERS();
};



	
/*
function loadMap() {
	document.getElementById("filterslot").innerHTML = buttonFilter();
	
	var myOptions = {
	
		center: new google.maps.LatLng(40.6958,-73.9120),
		zoom: 10,
		scrollwheel: false,
		disableDefaultUI: true,
	};
const { Map } = google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } =  google.maps.importLibrary("marker");
	map = new google.maps.Map(document.getElementById("map"), myOptions);

//let dummytitles=['Artist: Lil Wayne, Genre: Hiphop, Soundcloud: www.soundcloud.com/lilwayne','Artist: Jason Aldean, Genre: Country, Soundcloud: www.soundcloud.com/jasonaldean','Artist: Diplo, Genre: EDM, Soundcloud: www.soundcloud.com/diplo'];
//let dummydata=[dummytitles];
let count=0;
	let randomuserimg = ()=>{
		return 'https://randomuser.me/api/portraits/med/men/'+parseInt(Math.random()*100)+'.jpg'
	}
	
let buskers = [
	{lat: 40.6958+Math.random(), lng: -73.9171},
	{lat: 40.6960, lng: -73.9120+Math.random()},
	{lat: 40.6969+Math.random(), lng: -73.9124},
	{lat: 40.6970, lng: -73.9127+Math.random()}

];
  


	
buskers.forEach((x)=>{
let cmarker = {
	//url:'https://cdn-icons-png.flaticon.com/512/481/481546.png',
	url:markericon+performertype[parseInt(Math.random()*4)]+'.png',
	scaledSize: new google.maps.Size(50, 50), // scaled size
    
};
	
	var sucursal1 = new google.maps.Marker({
		position: x,
		map: map,
		animation: google.maps.Animation.DROP,
    title:x.lat.toString()+','+x.lng.toString(),
icon: cmarker
	});

	//let contentString = `<div style="background:black;color:white;"><img src=${user.img} class="userimg"></img><hr>
	//Genre: ${user.genre}<hr>
let contentString = `<div style="background:black;color:white;"><img src=${randomuserimg()} class="userimg"></img><hr>
  Genre: ${genreselect[parseInt(Math.random()*3)]}<hr>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width="16px" height="16px"></img>  
<img src="https://www.svgrepo.com/show/303135/soundcloud-logo.svg" width="16px" href="https://soundcloud.com" height="16px"></img></div>
<br>
<button onclick="handleClick(hire())">Hire</button><button>&#9658;</button>
<br>
<div class="soundcloud-wrapper" class="soundcloud">
<iframe width="73px" height="73px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/11072274&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"></iframe>
</div>
  `
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
	  maxWidth:300,
	  maxHeight:300,
  });

	sucursal1.addListener("click", () => {
    infowindow.open({
      anchor: sucursal1,
      map,
    });
   });

	//
}
	
);

};

*/
/*
function loadMap() {
	
	var myOptions = {
	
		center: new google.maps.LatLng(40.6958, -73.9120),
		zoom: 13,
		scrollwheel: !false,
		//disableDefaultUI: true,
  disableDefaultUI:false,
	};
const { Map } = google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } =  google.maps.importLibrary("marker");
	map = new google.maps.Map(document.getElementById("map"), myOptions);

//let dummytitles=['Artist: Lil Wayne, Genre: Hiphop, Soundcloud: www.soundcloud.com/lilwayne','Artist: Jason Aldean, Genre: Country, Soundcloud: www.soundcloud.com/jasonaldean','Artist: Diplo, Genre: EDM, Soundcloud: www.soundcloud.com/diplo'];
//let dummydata=[dummytitles];
let count=0;
let buskers = [
	{lat: 40.6958, lng: -73.9171},
	{lat: 40.6960, lng: -73.9120},
	{lat: 40.6969, lng: -73.9124},
	{lat: 40.6970, lng: -73.9127}

];
  
  console.log(buskers)

buskers.forEach((x)=>{
	var sucursal1 = new google.maps.Marker({
		position: x,
		map: map,
		animation: google.maps.Animation.DROP,
    title:null,
icon: custommarker
	});
}
	
);

};
*/


function loadMap() {

	let markersarray = [];
	//latest version 10.8.24
	document.getElementById("filterslot").innerHTML = buttonFilter();
	
	var myOptions = {
	
		center: new google.maps.LatLng(40.6958,-73.9120),
		zoom: 10,
		scrollwheel: false,
		disableDefaultUI: true,
		zoomControl:true,
		
	};
const { Map } = google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } =  google.maps.importLibrary("marker");
	map = new google.maps.Map(document.getElementById("map"), myOptions);
	globalMap = map;


	let i=0;
	//if(DEV_MODE==1){
buskers.all.forEach((x)=>{
	
let cmarker = {
	
	url:markericon+performertype[parseInt(Math.random()*4)]+'.png',
	scaledSize: new google.maps.Size(50, 50), // scaled size
//}
};
	

	/*
markers.push(new google.maps.Marker({
		position: x,
		map: map,
		animation: google.maps.Animation.DROP,
    //title:x.lat.toString()+','+x.lng.toString(),
		title:genreselect[parseInt(Math.random()*Math.PI)],
icon: cmarker
	}););

 */
	//let surcasal1;
	//markers[i]=surcasal1
	
	var surcasal1 = new google.maps.Marker({
	//markers[i]=new google.maps.Marker({
		position: x,
		map: globalMap,
		visible:true,
		animation: google.maps.Animation.DROP,
    //title:x.lat.toString()+','+x.lng.toString(),
		title:genreselect[parseInt(Math.random()*Math.PI)],
icon: cmarker
	});

	markersarray.push(surcasal1);

//markers.push(Math.random()*Math.PI);
	//markers.push(sucursal1);
	//NOW generate the markers from this array
//add newly formed marker to an array, you can access the array afterward.  Instead of creating array first and then running a for each to generate markers
	//let contentString = `<div style="background:black;color:white;"><img src=${user.img} class="userimg"></img><hr>
	//Genre: ${user.genre}<hr>
let contentString = `<div style="background:black;color:white;"><img src=${randomuserimg()} class="userimg"></img><hr>
  Genre: ${genreselect[parseInt(Math.random()*3)]}<hr>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width="16px" height="16px"></img>  
<img src="https://www.svgrepo.com/show/303135/soundcloud-logo.svg" width="16px" href="https://soundcloud.com" height="16px"></img></div>
<br>
<!--<button onclick="handleClick(hireBusker(1))">Hire</button><button>&#9658;</button>-->
${hireModal()}
<br>
<div class="soundcloud-wrapper" class="soundcloud">
<iframe width="73px" height="73px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/11072274&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false"></iframe>
</div>
  `
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
	  maxWidth:300,
	  maxHeight:300,
  });
surcasal1.addListener("click", () => {
	//markers[i].addListener("click", () => {
    infowindow.open({
      //anchor: markers[i],
	    //anchor:markers[i],
	    anchor: surcasal1,
      map,
    });
   });

	//



	
}
	
);

	
i++;
};
let livemarkers =[];
console.log(markers);
function getLiveData(){
	console.log('running...');
db.collection('markers').get()
  .then(querySnapshot => {
    const documents = [];
    querySnapshot.forEach(doc => {
      // Process each document
      const data = doc.data();
	    
      documents.push({ id: doc.id, ...data }); // Store the document ID and data

	    
    });
    // Now you have the 'documents' array with the data
    console.log('Live Data All Markers:',documents);
console.log(documents[0].isActive);
documents.forEach((x)=>{
if(x.isActive==true){
livemarkers.push(x);
	let marker = new google.maps.Marker({
		position: {lat: parseInt(x.lat), lng: parseInt(x.lng)},
    
		map: map,
		animation: google.maps.Animation.DROP,
     //icon: image,
      //shape: shape,
title:x.title
	});
}
});
	  console.log('Markers with geo data and isActive true',livemarkers);
  })
  .catch(error => {
    console.error("Error getting documents: ", error);
  });
}
getLiveData();
function broadcast(x){
if(state==true){
  x = new google.maps.Marker({
		position: {lat: 40.700, lng: -73.9171},
    //{lat: parseInt(window.prompt('Insert Lat')), lng: parseInt(window.prompt('Insert Long'))},
		map: map,
		animation: google.maps.Animation.DROP,
    title:'Artist: Lil Wayne, Genre: Hiphop, Soundcloud: www.soundcloud.com/lilwayne'
		//icon: img
	});
}
  else{alert('Busking Ended!')}
  
}

var point = new google.maps.LatLng(40.7010, -73.9120);
    var data = "Hello World!";
    var infowindow = new google.maps.InfoWindow({
      content: data
    });


    var marker = new google.maps.Marker({
        position: point,
        title:"Hello World!"
    });



google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });


let counter = 0;
/*
    const socket = io({
      auth: {
        serverOffset: 0
      },
      ackTimeout: 10000,
      retries: 3,
    });

    const btn = document.getElementById('broadcast');


    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if(state==true){
    
        const clientOffset = `${socket.id}-${counter++}`;
        socket.emit('chat message', window.prompt('Input Coordinates'), clientOffset);
      }
      else{}
      
    });

    socket.on('chat message', (msg, serverOffset) => {
      
      
       new google.maps.Marker({
		position: {lat: 40.700, lng: -73.9171},
    //{lat: parseInt(window.prompt('Insert Lat')), lng: parseInt(window.prompt('Insert Long'))},
		map: map,
		animation: google.maps.Animation.DROP,
		//icon: img
	});

      
      
    });
*/
function handleClick(route){
	if(state.currentView!=Map){
		document.getElementById("filterslot").innerHTML = '';
	}
  //alert(JSON.stringify(e))
  document.getElementById("map").innerHTML = route();
	state.currentView = route;
	console.log(state.currentView);
	console.log(state);
}

function updateProfile(){
	
	userdat.name = document.getElementById("fname").value;
	userdat.type = document.getElementById("ftype").value;
	userdat.soundcloud = document.getElementById("fsoundcloud").value;
	userdat.instagram = document.getElementById("finstagram").value;
	userdat.payment = document.getElementById("fpaymentid").value;
	//now update the entire object and send to firestore
	//loop thru all elements
	alert('Profile Updated!');
	//user = userdat;
	//console.log(user);
	db.collection('users').doc(UID).update(userdat)
	.then(() => {
    console.log('User document updated successfully.');
  })
  .catch((error) => {
    console.error('Error updating user document:', error);
  });
	
}
function Home(){
	loadMap();
	
  //return '<div style="padding:20px;margin:auto">Current Route: /Home</div>'
}



function Profile(){

  return `
  <div class="views2 smoothfade">Current Route: / ${currentroute}</div>
	  <div class="views2" id="views2">
	  <form>
   <label for="fname" placeholder="Name">Account Type</label><br>
<select id="ftype" name="ftype" style="width:192px;">
  <option value="Busker">Busker</option>
  <option value="Listener">Fan</option>
</select> 
<br>
  <!--<input type="text" id="ftype" name="ftype" placeholder="${type}"><br>-->
  <label for="fname" placeholder="Name">Name</label><br>
  <input type="text" id="fname" name="fname" placeholder="${username}"><br>
  <label for="lname">Email</label><br>
  <input type="text" id="femail" name="femail" placeholder="${useremail}"><br>
	  <label for="soundcloud">Soundcloud:</label><br>
  <input type="text" id="fsoundcloud" name="fsoundcloud" placeholder="${userdat.soundcloud}" value="${userdat.soundcloud}"><br>
	  <label for="lname">Instagram</label><br>
  <input type="text" id="finstagram" name="finstagram" placeholder="${userdat.instagram}" value="${userdat.soundcloud}"><br>
	  <label for="paymentid">Venmo/PayPal</label><br>
  <input type="text" id="fpaymentid" name="fpaymentid" placeholder="${userdat.payment}"><br>
   <button onclick="updateProfile()" type="button">Save</button>
   <br>

</form>




	  </div>
	  `
}

function Gigs(){
  return `
  <div class="views2 smoothfade">Current Route: /Gigs</div>
	  <div class="views2">

   <!--
	  <ul>
   <li><div class="gig-card">Event 1</div></li>
    <li><div class="gig-card">Event 2</div></li>
     <li><div class="gig-card">Event 3</div></li>
 
	  </div>
-->

<li>
  <div class="gig-card">
    <img src=${randomuserimg()} class="userimg"></img><hr>
    <div class="card-body">
      <div class="text-section">
        <h5 class="card-title">Bushwick Bar</h5>
        <p class="card-text">Looking for a DJ</p><br>
	Date: May 30, 2025
      </div>
      <div class="">
        <div>Payment: $300</div><br>
        <button class="inquire-btn"><a href="sms:9175555555">Inquire</a></button>
      </div>
    </div>
  </div>
  </li>
  <li>
<div class="gig-card">
    <img src=${randomuserimg()} class="userimg"></img><hr>
    <div class="card-body">
      <div class="text-section">
        <h5 class="card-title">LES Restaurant</h5>
        <p class="card-text">Looking for a singer</p><br>
	Date: June 1, 2025
      </div>
      <div class="">
        <div>Payment: $375</div><br>
        <button class="inquire-btn"><a href="sms:9175555555">Inquire</a></button>
      </div>
    </div>
  </div>
  </li>

   
	  `
};

  function initQR(){
	  new QRCode(document.getElementById("qrcodes"), `https://venmo.com/?txn=pay&audience=friends&recipients=${useremail}`);
  };

function Payments(){
	setTimeout(initQR,0xff);
	let qr= "data:image/png;base64,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"

	return `
  <div class="views2 smoothfade" style="padding:20px;margin:auto">Current Route: /Payments</div>
<!--<div class="views2" id="qrcode" style="padding:20px;margin:5;">-->
  <!--<img src=${qr}></img><br>-->
  
<div id="qrcodes"></div>

  <code>Your Payment QR Code</code>
  <br>
  <div style="background:white;">Current Balance: $371.82</div>
    
  `
}

function Hire(){
	const urlParams = new URLSearchParams(window.location.hash);
const myParam = urlParams.get('paramName'); // Replace 'paramName' with the actual parameter name
//console.log(urlParams.toString());
	let userstring = urlParams.toString();
;
  return `
  
  <div class="views2" style="padding:20px;margin:auto">Current Route: /Hire</div>
  <div id="hiring">


<div class='box'>
<input type='text' value='${userstring}' placeholder='Enter name, lastname or id' id="user-search" onclick="searchComponent()">
<h1 class='info-search'>
</h1>
</div>
<div class='search-box-result'>  </div>
<template data-template-avatar>
</template>


  `
	
	  //searchComponent();
	
}

function renderList(list,target){
  list.forEach((x)=>{
    document.getElementById(target).innerHTML += x;
  })
}

let requestslist = [1,2,3,4];

function Requests(){
//setTimeout(renderList(requestslist,"requestslist"),10000);
  return `
  
  <div class="views2" style="padding:20px;margin:auto">Current Route: /Requests</div>
  <div id="requests">
  <div class="views2" id="hiringheading">Current Requests</div>
  <ul ="requestslist">
<li></li>
  </ul>
  </div>
  `
}



/*
function Tickets(){

  return '<div class="views2" style="padding:20px;margin:auto">Current Route: /Tickets</div>'
}
*/

let dat,tim,ven;
dat = 'Wed Feb 24 2024'
tim = '8:00PM'
ven = 'Madison Square Garden'
  let HTMLstr;
  HTMLstr ='';
let i=0;
function retrieveData(){
  {
fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=345&apikey=2ud9ArdAhSfAI8wsXp5VTRBAGd1GirBj')
.then(res=>res.json())
.then(d=>d._embedded.events.forEach((x)=>{
if(i<10){
	i++;
      let img = `${x.images[0].url}`

      let newStr = `<div class="ticketcontainer marquee">
      <div><h2>${x.name}<br>
      ${ven}</h2><br><img src=${img} class="eventimg"></img>
      <div class="centered">${dat}
      <br>
      ${tim}
     </div>
      </div>
      </div>`
     HTMLstr = HTMLstr+newStr
  document.getElementById("ticketsview").innerHTML = HTMLstr
}
}))                                  
  }
  
}



function Tickets(){
return `<div id="ticketsview" class="ticketscontainer">${retrieveData()}</div>`
}

	


const view = document.getElementById("view");
/*
document.querySelector("#navitem").forEach((x)=>{
  x.onclick = alert('Clicked')
})
*/
function renderBuskState(){
	console.log(user);
	if(user.isActive==true){
		btns.classList.toggle('button-ani');
		console.log('Currently Busking');
		
	}
}
renderBuskState();
user.isActive=false;
function busk(){
	
	
	if(user.isActive==false){
		user.isActive=true;
		btns.classList.toggle('button-ani');
		
		console.log('You Are Now Busking! Coordinates:',latitude,longitude);
		addBusker();
		console.log(user);
			    }
	else{
		user.isActive=false;
		console.log('Busking Ended');
		btns.classList.toggle('button-ani');
		removeBusker();
	}
	
	
};

function addBusker(){
	alert('Adding To Map');
}

function removeBusker(){
	alert('Removing from Map');
};

/*
btns.onclick = (e)=>{
//function busk(){
  //send()
	if(state.currentView != Home()){
		//return null;
		alert('You Can Not Busk!');
	}

  btns.classList.toggle('button-ani');
  console.log(e);
  state = !state;
  alert('Busking Status Set to '+state);
	buskers.push(this);	
	let msg = 'Currently Busking='+buskers.length;
  const customMarker = document.createElement('img');
  customMarker.className = 'marker';
  customMarker.src = user.img;
  const image = {
    //url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    

    //size: new google.maps.Size(20, 32),
    
    url:custommarker,
size: new google.maps.Size(61,61),
    origin: new google.maps.Point(0, 0),

    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };
  let contentString = `<img src=${user.img} class="userimg"></img><hr>
  Genre: ${user.genre}<hr>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width="32px" height="32px"></img>  
<img src="https://www.svgrepo.com/show/303135/soundcloud-logo.svg" width="32px" href="https://soundcloud.com" height="32px"></img>
  `
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
  //
  
   let marker = new google.maps.Marker({
		position: {lat: 40.70+(Math.random()/50), lng: -73.9171+(Math.random()/50)},
    //{lat: parseInt(window.prompt('Insert Lat')), lng: parseInt(window.prompt('Insert Long'))},
		map: map,
		animation: google.maps.Animation.DROP,
     icon: image,
      shape: shape,
		//icon: img
     //content:customMarker
	});
   marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
   });
	
}
*/
/*
let wsUri = "wss://socketsbay.com/wss/v2/1/b82aefd80dfc40b5c084ae38a67f6025/";
let log;

function init()
    {
      log = document.getElementById("log");
      testWebSocket();
    }

    function testWebSocket()
    {
      websocket = new WebSocket(wsUri);
      websocket.onopen    = function(e) { onOpen(e)    };
      websocket.onclose   = function(e) { onClose(e)   };
      websocket.onmessage = function(e) { onMessage(e) };
      websocket.onerror   = function(e) { onError(e)   };
    }

    function onOpen(e)
    {
      writeLog("CONNECTED");
      //alert('Connected!')
      console.log(JSON.stringify(e))
     
    }

    function onClose(e)
    {
      writeLog("Websocket DISCONNECTED");
      
    }

    function onMessage(e)
    {
      writeLog('New Connection: ' + e.data );
      websocket.close();
    }

    function onError(e)
    {
      writeLog('ERROR: ' + e.data);
    }

    function sendMessage(message)
    {
      if(websocket.readyState==1){
      writeLog(`${Date.now()}: ${message} `);
      websocket.send(message);
      }
    }
//
//

    function writeLog(message)
    {
let newmsg = document.createElement('p');
      newmsg.innerHTML = message
      log.appendChild(newmsg)
    }
function send(x){
  //x = window.prompt('Enter Text')
  x = latitude+','+longitude
  console.log(latitude)
  sendMessage(x);
  console.log(websocket.bufferedAmount)
  //each character is one byte

  
}

init();


//console.log(websocket.readyState)

//
*/
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
latitude = crd.latitude;
 longitude = crd.longitude;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  //console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

/*

class event{
  constructor(title,artist,description,price,venue,date,img,city,id){
    this.title = title;
    this.artist = artist;
    this.description = description;
    this.price = price;
    this.venue = venue;
    this.date = date;
    this.date = date;
    this.img = img;
    this.city = city;
    this.id = id;
  }
}

let img = 'https://thumb.spokesman.com/ZaJ5v4lWgbUdTHaeOWOisXuGbb4=/1200x800/smart/media.spokesman.com/photos/2020/05/27/2c_With_Love_Benefit_Concert.JPG.jpg'

let img2 = 'https://thumb.spokesman.com/kEfGcmB37IpCH6gvl4giw11vDYM=/2500x2500/smart/media.spokesman.com/photos/2020/05/27/refly_Music_Festival_-_Day_2.JPG_pjLcipd.jpg'

let img3 = 'https://www.wearetheguard.com/sites/default/files/pictures/13-best-indie-artists-2018-influencers-choice-noah-slee.jpg'
//
let e1 = new event('1','Stephanie B','3','4','5','8:00PM',img,'Chelsea Piers NY','8',9,10);

let e2 = new event('1','Stephanie B','3','4','5','8:00PM',img2,'Astoria, NY','8',9,10);

let e3 = new event('1','Stephanie B','3','4','5','8:00PM',img3,'Brooklyn NY','8',9,10);

events.push(e1);
events.push(e2);
events.push(e3);

events.forEach((event)=>{
  document.getElementById("events").innerHTML +=`<a onclick="moreInfo(${event.id})">
<article class="event-li">
<div class="picture">
<img src="${event.img}"alt="${event.artist}"/>
<div class="event-li-date">${event.date}
</div>
</div>
<div class="box-info-event">
<h2 class="event-li-title">${event.artist}</h2>
<div class="event-li-location">${event.date}, ${event.city}</div>
</div>
</article></a>`
})
*/

/*
let featuredEvent = ()=>{
  return `
  <img
              src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/event-banner.png"
              alt="Concert"
              class="event-banner"
            />
            <div class="info-event">
              <div class="date-event">August 22nd, 8:00 PM</div>
              <h2 class="title-event">Tyler Myers</h2>
              <div class="location-event">
                <img
                  src="https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/gOQRaMY/location.svg"
                />
                Brooklyn, USA
              </div>
              <p class="discraption-event">
                "{{Event Description Goes Here}}.
              </p>
              <a href="#" class="get-event">FREE EVENT</a>
            </div>
          </div>
        </div>
  
  `
}

document.getElementById("featuredevent").innerHTML = featuredEvent()

*/


function addMarker(){
	state = !state;
  //alert('Busking Status Set to '+state);
	alert('Busking Status Set to Live!');
	buskers.push(this);	
	let msg = 'Currently Busking='+buskers.length;
  const customMarker = document.createElement('img');
  customMarker.className = 'marker';
  customMarker.src = user.img;
  const image = {
    
    url:livemarker,
size: new google.maps.Size(61,61),
    origin: new google.maps.Point(0, 0),

    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };
  let contentString = `<img src=${user.img} class="userimg"></img><hr>
  Genre: ${user.genre}<hr>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" width="32px" height="32px" href="https://www.instagram.com"></img>  
<img src="https://www.svgrepo.com/show/303135/soundcloud-logo.svg" width="32px" href="https://soundcloud.com" height="32px"></img>
  `
	//for each link, render icon...
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
  //
  
   let marker = new google.maps.Marker({
		position: {lat: 40.70+(Math.random()/50), lng: -73.9171+(Math.random()/50)},
    //{lat: parseInt(window.prompt('Insert Lat')), lng: parseInt(window.prompt('Insert Long'))},
		map: map,
		animation: google.maps.Animation.DROP,
     icon: image,
      shape: shape,
		//icon: img
     //content:customMarker
	});
   marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
   });
	
}

window.onload = loadMap()
/*}

export default app;
*/


google.maps.event.addListener(marker,'mouseover',function(){$(".gm-style   div").addClass("markerClass")});                        
google.maps.event.addListener(marker,'mouseout',function(){$(".gm-style div").removeClass("markerClass")});         




function searchComponent(){
let users = [
  {
    id:1,
    img:'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    name: 'Nikola',
    lastName: 'Mrsic',
    social:'www.instagram.com/'+this.name
  },
  {
     id:2,
    img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'Tamara',
    lastName: 'Ivanov',
    social:'www.instagram.com/'
  },
  { id:3,
    img:'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Katarina',
    lastName: 'Petrov',
   social:'www.instagram.com/'+this.name
   
  },
]

let userdata;

async function fetchData(url){
  let x = await fetch(url);
  let y = await x.json();
  userdata = y;
  console.log(userdata)
  
}

fetchData('https://randomuser.me/api/?results=10')


let infoSearch=document.querySelector('.info-search');
let searchBoxResult = document.querySelector('.search-box-result')
let avatarBox = document.querySelector('.avatar-box')

let templateAvatar = document.querySelector('[data-template-avatar]')

let input = document.getElementById('user-search');

let sortedData = [];



let filterData = (list,criteria)=>{
  list.forEach((x)=>{
  if(x.name.includes(criteria)){
    sortedData = [];
    sortedData.push(x);
    
  }
});
}

input.oninput = ()=>{
  filterData(users,input.value);
  console.log(sortedData);
  searchBoxResult.innerHTML = '';
  sortedData.forEach((x)=>{    
 
    searchBoxResult.innerHTML += userCard(x.name,x.email,x.img,x.social+x.name)+"<br>"
  })
}

let userCard = (name,email,image,social)=>{
  return `
  
  <div class="avatar-box">

  <div class="avatar-pic">
    <img class='avatar-img'src=${image}/>
  </div>

      

      <div class="avatar-text">
<div class="name">
${name}
</div>
<div class="email">
${social}
</div>
<button class='btn' onClick={this.change}>
 Hire
</button>


</div>
    </div>
`
}

}


window.addEventListener("load", (event) => {
  loadMap();
});
user = userdat;
console.log('testing user object',userdat);
