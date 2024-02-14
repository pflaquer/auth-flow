let user;
let venues = []
let state;
state = false;

user = {
img:'https://raw.githubusercontent.com/emnatkins/cdn-codepen/main/default.jpeg'
}
let user.img = localStorage.getItem(1);
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
var buskers = [];
let latitude;
let longitude;

let loggedin = false;

window.onload = function() {
	
	var myOptions = {
	
		center: new google.maps.LatLng(40.6958, -73.9120),
		zoom: 13,
		scrollwheel: false,
		disableDefaultUI: true,
	};

	map = new google.maps.Map(document.getElementById("map"), myOptions);

let buskers = [
	{lat: 40.6958, lng: -73.9171},
	{lat: 40.6960, lng: -73.9120}

];
  
  console.log(buskers)

buskers.forEach((x)=>{
	var sucursal1 = new google.maps.Marker({
		position: x,
		map: map,
		animation: google.maps.Animation.DROP,
    title:'Artist: Lil Wayne, Genre: Hiphop, Soundcloud: www.soundcloud.com/lilwayne'
		//icon: img
	});
}
);

};




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
function handleClick(e){
  //alert(JSON.stringify(e))
  view.innerHTML = Home();
}

function Home(){
  return 'You Are Home'
}


const view = document.getElementById("view");
/*
document.querySelector("#navitem").forEach((x)=>{
  x.onclick = alert('Clicked')
})
*/


let btns = document.getElementById("pulse")

btns.onclick = ()=>{
  //send()
  btns.classList.toggle('button-ani');
  //console.log(e);
  state = !state;
  alert('Busking Status Set to '+state);
	buskers.push(this);	
	let msg = 'Currently Busking='+buskers.length;
  
   new google.maps.Marker({
		position: {lat: 40.700, lng: -73.9171},
    //{lat: parseInt(window.prompt('Insert Lat')), lng: parseInt(window.prompt('Insert Long'))},
		map: map,
		animation: google.maps.Animation.DROP,
		//icon: img
	});
	
}

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


function test(){
	alert('working');
	btns.classList.toggle('button-ani');
}

